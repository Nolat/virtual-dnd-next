import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, ListItem } from "@chakra-ui/layout";
import Head from "next/head";

import { DarkModeSwitch, SideBar } from "components";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SideBar side="left" align="bottom">
        <ListItem>
          <DarkModeSwitch />
        </ListItem>
      </SideBar>

      <Box
        bg={bg}
        h="100%"
        w="calc(100% - 4em)"
        mt="3em"
        mb={0}
        alignSelf="flex-end"
        borderTopLeftRadius="4xl"
      />
    </>
  );
};

export default Index;
