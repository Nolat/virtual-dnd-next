import { useColorMode, useTheme } from "@chakra-ui/react";
import { KonvaEventObject } from "konva/types/Node";
import { Vector2d } from "konva/types/types";
import { useEffect, useRef } from "react";
import { Image, Layer, Stage } from "react-konva";
import { useBattlemapStore } from "store/battlemap";
import { useBoardPositionStore } from "store/boardPosition";
import useImage from "use-image";

import { Grid } from "components";
import { useWindowSize } from "hooks";

const CELL_SIZE = 32;

const Board: React.FC = () => {
  // ? Board position store
  const { stagePosition, stageScale, updatePosition, updateScale } = useBoardPositionStore();
  // ? Battlemap store
  const { battlemapUrl } = useBattlemapStore();
  const [image] = useImage(battlemapUrl);

  const theme = useTheme();
  const { colorMode } = useColorMode();
  const { width, height } = useWindowSize();

  const strokeColor = colorMode === "light" ? theme.colors.gray[300] : theme.colors.gray[700];

  // ? Add border radius to canvas
  const layerRef = useRef<any>();
  useEffect(() => {
    if (layerRef.current)
      layerRef.current.getCanvas()._canvas.style.borderTopLeftRadius = theme.radii["4xl"];
  }, [theme.radii]);

  // ? Handle zoom on scroll
  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 0.96;
    const stage = e.target.getStage();

    if (stage) {
      const oldScale = stage.scaleX();
      const mousePointTo = {
        x: (stage.getPointerPosition()?.x ?? 0) / oldScale - stage.x() / oldScale,
        y: (stage.getPointerPosition()?.y ?? 0) / oldScale - stage.y() / oldScale
      };

      const calculatedScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      const newScale = calculatedScale > 3 ? 3 : calculatedScale < 0.5 ? 0.5 : calculatedScale;

      updateScale(newScale);
      updatePosition({
        x: -(mousePointTo.x - (stage.getPointerPosition()?.x ?? 0) / newScale) * newScale,
        y: -(mousePointTo.y - (stage.getPointerPosition()?.y ?? 0) / newScale) * newScale
      });
    }
  };

  return (
    <Stage
      width={width - 64}
      height={height - 48}
      onWheel={handleWheel}
      scaleX={stageScale}
      scaleY={stageScale}
      x={stagePosition.x}
      y={stagePosition.y}
      draggable
      dragBoundFunc={(pos: Vector2d): Vector2d => {
        const x = pos.x > 1200 ? 1200 : pos.x < -1200 ? -1200 : pos.x;
        const y = pos.y > 1200 ? 1200 : pos.y < -1200 ? -1200 : pos.y;

        return { x, y };
      }}
      onDragEnd={(e) => updatePosition(e.currentTarget.getPosition())}
      style={{ cursor: "move" }}
    >
      <Layer ref={layerRef as any}>
        <Image image={image} draggable />
        <Grid color={strokeColor} cellSize={CELL_SIZE} />
      </Layer>
    </Stage>
  );
};

export default Board;
