import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

import { Hero } from "modules/landing";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Virtual D&D</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero title="Welcome to Virtual D&D" />

      <Stack spacing="1.5rem" width="100%" maxWidth="32rem" mt="-45vh" pt="8rem" px="1rem">
        <Button colorScheme="orange" onClick={() => router.push("/game")}>
          Start Game
        </Button>

        <Button colorScheme="orange" onClick={() => router.push("/game")}>
          Join Game
        </Button>
      </Stack>
    </>
  );
};

export default Index;
