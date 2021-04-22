import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

import { IconButton } from "components";

const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const tooltipBg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <IconButton
      bg={tooltipBg}
      color={color}
      icon={isDark ? <FiMoon /> : <FiSun />}
      tooltip={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="right"
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
