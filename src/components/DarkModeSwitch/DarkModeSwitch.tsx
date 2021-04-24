import { useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

import { IconButton } from "components";

const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      icon={isDark ? <FiMoon /> : <FiSun />}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      tooltip={`Switch to ${isDark ? "light" : "dark"} mode`}
      tooltipPlacement="right"
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
