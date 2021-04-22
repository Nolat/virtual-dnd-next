import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

const Hero: React.FC<HeroProps> = ({ title }: HeroProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-l, #C53030, #F6AD55)"
      bgClip="text"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  );
};

export default Hero;

interface HeroProps {
  title: string;
}
