import { IconButton as CIconButton, Placement, Tooltip } from "@chakra-ui/react";
import React from "react";

const IconButton: React.FC<IconButtonProps> = ({
  bg,
  color,
  icon,
  placement,
  tooltip,
  onClick
}: IconButtonProps) => {
  return (
    <Tooltip hasArrow label={tooltip} bg={bg} color={color} placement={placement}>
      <CIconButton aria-label={tooltip} icon={icon} variant="ghost" onClick={onClick} />
    </Tooltip>
  );
};

export default IconButton;

export interface IconButtonProps {
  bg: string;
  color: string;
  icon: React.ReactElement;
  placement: Placement;
  tooltip: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
