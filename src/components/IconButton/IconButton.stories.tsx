import { useColorModeValue } from "@chakra-ui/color-mode";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiMap } from "react-icons/fi";

import IconButton from "./IconButton";

export default {
  title: "Components/Icon Button",
  component: IconButton,
  argTypes: { onClick: { action: "clicked" } }
} as Meta;
export const Default: Story = ({ onClick }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <IconButton
      bg={bgColor}
      color={color}
      icon={<FiMap />}
      aria-label="Import your battlemaps"
      tooltip="Import your battlemaps"
      tooltipPlacement="right"
      onClick={onClick}
    />
  );
};
