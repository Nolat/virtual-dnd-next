import { FiMap } from "react-icons/fi";
import { useBattlemapStore } from "store/battlemap";

import { IconButton } from "components";

const SelectBattlemapButton = () => {
  // ? Battlemap store
  const { openModal } = useBattlemapStore();

  return (
    <IconButton
      icon={<FiMap />}
      aria-label={`Select a battlemap`}
      tooltip={`Select a battlemap`}
      tooltipPlacement="right"
      onClick={openModal}
    />
  );
};

export default SelectBattlemapButton;
