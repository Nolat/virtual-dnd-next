import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import Fuse from "fuse.js";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import BattlemapPreview from "../BattlemapPreview/BattlemapPreview";
import maps from "./maps.json";

const BattlemapList: React.FC<BattlemapListProps> = ({
  clickedMap,
  onClickOnMap
}: BattlemapListProps) => {
  // ? Handle search
  const [searchText, setSearchText] = useState<string>();
  const [list, setList] = useState(maps.list);

  useEffect(() => {
    if (searchText) {
      const fuse = new Fuse(maps.list, { keys: ["name"], threshold: 0.2 });

      setList(fuse.search(searchText).map((element) => element.item));
    } else {
      setList(maps.list);
    }
  }, [searchText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value !== "" ? setSearchText(e.target.value) : setSearchText(undefined);
  };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input type="search" placeholder="Search" onChange={handleChange} />
      </InputGroup>

      <SimpleGrid columns={4} spacing={2} p={2} mt={2}>
        {list.map(({ name, width, height, imageUrl }: any) => (
          <BattlemapPreview
            key={name}
            name={name}
            width={width}
            height={height}
            imageUrl={imageUrl}
            isSelected={clickedMap === imageUrl}
            onClick={onClickOnMap}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BattlemapList;

interface BattlemapListProps {
  clickedMap?: string;
  onClickOnMap: (url: string) => void;
}
