import { Flex, FlexProps, List, ListItemProps } from "@chakra-ui/layout";

const SideBar: React.FC<SideBarProps> = ({ side, align, children, ...props }: SideBarProps) => {
  const sideProps = side === "left" ? { left: 0 } : { right: 0 };

  return (
    <Flex
      {...props}
      h="100%"
      w="64px"
      p={4}
      position="fixed"
      top={0}
      {...sideProps}
      justifyContent="center"
      alignItems={align === "bottom" ? "flex-end" : "flex-start"}
    >
      <List spacing={3}>{children}</List>
    </Flex>
  );
};

export default SideBar;

export interface SideBarProps extends FlexProps {
  side: "left" | "right";
  align: "top" | "bottom";
  children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[];
}
