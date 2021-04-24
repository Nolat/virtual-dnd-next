import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import { Img, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const BattlemapPreview: React.FC<BattlemapPreviewProps> = ({
  name,
  height,
  width,
  imageUrl,
  isSelected,
  onClick
}: BattlemapPreviewProps) => {
  const bgColor = useColorModeValue("gray.200", "gray.800");
  const badgeBgColor = useColorModeValue("gray.300", "gray.700");
  const badgeColor = useColorModeValue("black", "white");

  return (
    <Box
      width={200}
      height={200}
      borderRadius="md"
      cursor="pointer"
      bg={bgColor}
      onClick={() => onClick(imageUrl)}
    >
      <Img
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        objectFit="cover"
        position="absolute"
        borderRadius="md"
      />
      <Flex
        width={200}
        height={200}
        justifyContent="center"
        alignItems="flex-end"
        position="absolute"
        borderRadius="md"
        bgGradient="linear(to-b, transparent 65%, black)"
      >
        <Text color="white" fontWeight="medium" marginBottom={2}>
          {name}
        </Text>
      </Flex>
      <Box
        width={200}
        height={200}
        borderRadius="md"
        position="absolute"
        borderWidth={isSelected ? 4 : 0}
        borderColor={isSelected ? "red.500" : undefined}
      />
      <Badge m={2} position="absolute" bg={badgeBgColor} color={badgeColor}>
        {`${width}x${height}`}
      </Badge>
    </Box>
  );
};

export default BattlemapPreview;

interface BattlemapPreviewProps {
  name: string;
  height: number;
  width: number;
  imageUrl: string;
  isSelected: boolean;
  onClick: (imageUrl: string) => void;
}
