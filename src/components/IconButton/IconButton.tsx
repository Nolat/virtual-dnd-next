import {
  IconButton as CIconButton,
  IconButtonProps as CIconButtonProps,
  Placement,
  Tooltip
} from "@chakra-ui/react";

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  placement,
  tooltip,
  onClick,
  colorScheme = "gray",
  ...rest
}: IconButtonProps) => {
  return (
    <Tooltip hasArrow label={tooltip} placement={placement} colorScheme={colorScheme}>
      <CIconButton
        icon={icon}
        variant="ghost"
        onClick={onClick}
        colorScheme={colorScheme}
        {...rest}
      />
    </Tooltip>
  );
};

export default IconButton;

export interface IconButtonProps extends CIconButtonProps {
  icon: React.ReactElement;
  placement: Placement;
  tooltip: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  colorScheme?: string;
  color?: string;
  bg?: string;
}
