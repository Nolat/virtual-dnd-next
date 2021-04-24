import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, ListItem } from "@chakra-ui/layout";
import Head from "next/head";
import { useBoardPositionStore } from "store/boardPosition";

import { DarkModeSwitch, SideBar } from "components";
import {
  BackToCenterButton,
  Board,
  SelectBattlemapButton,
  SelectBattlemapModal
} from "modules/game";

const Index = () => {
  // ? Board position store
  const { resetPosition, resetScale } = useBoardPositionStore();

  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SideBar side="left" align="bottom">
        <ListItem>
          <SelectBattlemapButton />
        </ListItem>
        <ListItem>
          <DarkModeSwitch />
        </ListItem>
      </SideBar>

      <Box
        bg={bg}
        h="100%"
        w="calc(100% - 64px)"
        mt="48px"
        mb={0}
        alignSelf="flex-end"
        borderTopLeftRadius="4xl"
        zIndex={2}
      >
        <Board />

        <SelectBattlemapModal />

        <BackToCenterButton
          onClick={() => {
            resetPosition();
            resetScale();
          }}
        />
      </Box>
    </>
  );
};

export default Index;
