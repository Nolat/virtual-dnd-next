import { useColorModeValue } from "@chakra-ui/color-mode";
import { MouseEventHandler } from "react";
import { FiCrosshair } from "react-icons/fi";

import { IconButton } from "components";

const BackToCenterButton: React.FC<BackToCenterButtonProps> = ({
  onClick
}: BackToCenterButtonProps) => {
  const colorScheme = useColorModeValue("whiteAlpha", "blackAlpha");
  const bg = useColorModeValue("gray.50", "black");
  const color = useColorModeValue("black", "white");

  return (
    <IconButton
      icon={<FiCrosshair />}
      aria-label="Back to center"
      tooltip="Back to center"
      placement="right"
      variant="solid"
      colorScheme={colorScheme}
      bg={bg}
      color={color}
      position="absolute"
      isRound
      right={10}
      bottom={10}
      onClick={onClick}
    />
  );
};

export default BackToCenterButton;

interface BackToCenterButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
