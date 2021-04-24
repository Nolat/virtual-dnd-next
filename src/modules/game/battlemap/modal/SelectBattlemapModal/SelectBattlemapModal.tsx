import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useBattlemapStore } from "store/battlemap";

import { IconButton } from "components";

import BattlemapList from "../BattlemapList/BattlemapList";

const SelectBattlemapModal: React.FC = () => {
  // ? Battlemap store
  const { isModalOpen, closeModal, selectBattlemap, battlemapUrl } = useBattlemapStore();

  // ? Handle selection
  const [clickedMap, setClickedMap] = useState<string>();

  useEffect(() => {
    if (battlemapUrl) setClickedMap(battlemapUrl);
    else setClickedMap(undefined);
  }, [isModalOpen, battlemapUrl]);

  const onClickOnMap = (imageUrl: string) => {
    setClickedMap(imageUrl);
  };

  const onSelect = () => {
    if (clickedMap) {
      selectBattlemap(clickedMap);
      closeModal();
    }
  };

  const onUnselect = () => {
    setClickedMap(undefined);
    selectBattlemap("");
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select or import a battlemap</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <BattlemapList clickedMap={clickedMap} onClickOnMap={onClickOnMap} />
        </ModalBody>

        <ModalFooter>
          <Button width="100%" onClick={onSelect}>
            Select
          </Button>
          <IconButton
            icon={<FiTrash2 />}
            aria-label={`Unselect current battlemap`}
            tooltip={`Unselect current battlemap`}
            tooltipPlacement="top-end"
            onClick={onUnselect}
            variant="solid"
            ml={2}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectBattlemapModal;
