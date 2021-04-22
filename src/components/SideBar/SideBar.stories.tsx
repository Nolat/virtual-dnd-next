import { useColorModeValue } from "@chakra-ui/color-mode";
import { ListItem } from "@chakra-ui/layout";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiMap } from "react-icons/fi";

import { IconButton } from "components";

import SideBar, { SideBarProps } from "./SideBar";

export default {
  title: "Components/Side Bar",
  component: SideBar,
  argTypes: {
    side: {
      options: ["right", "left"],
      control: { type: "select" },
      defaultValue: "left"
    },
    align: {
      options: ["bottom", "top"],
      control: { type: "select" },
      defaultValue: "bottom"
    }
  }
} as Meta;

export const Default: Story<SideBarProps> = ({ ...args }) => {
  const bg = useColorModeValue("gray.50", "gray.700");
  const tooltipBg = useColorModeValue("gray.100", "gray.600");
  const color = useColorModeValue("black", "white");

  return (
    <SideBar bg={bg} {...args}>
      <ListItem>
        <IconButton
          bg={tooltipBg}
          color={color}
          icon={<FiMap />}
          aria-label="Import your battlemaps"
          tooltip="Import your battlemaps"
          placement="right"
        />
      </ListItem>
    </SideBar>
  );
};
