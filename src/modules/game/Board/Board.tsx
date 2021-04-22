import { useColorMode, useTheme } from "@chakra-ui/react";
import { KonvaEventObject } from "konva/types/Node";
import { Vector2d } from "konva/types/types";
import { useEffect, useRef, useState } from "react";
import { Circle, Layer, Stage } from "react-konva";

import { Grid } from "components";
import { useWindowSize } from "hooks";

import { BackToCenterButton } from "..";

const CELL_SIZE = 32;

const Board: React.FC = () => {
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
  const [stageScale, setStageScale] = useState(1);
  const [stageX, setStageX] = useState(0);
  const [stageY, setStageY] = useState(0);
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

      setStageScale(newScale);
      setStageX(-(mousePointTo.x - (stage.getPointerPosition()?.x ?? 0) / newScale) * newScale);
      setStageY(-(mousePointTo.y - (stage.getPointerPosition()?.y ?? 0) / newScale) * newScale);
    }
  };

  return (
    <>
      <Stage
        width={width - 64}
        height={height - 48}
        onWheel={handleWheel}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stageX}
        y={stageY}
        draggable
        dragBoundFunc={(pos: Vector2d): Vector2d => {
          const x = pos.x > 1200 ? 1200 : pos.x < -1200 ? -1200 : pos.x;
          const y = pos.y > 1200 ? 1200 : pos.y < -1200 ? -1200 : pos.y;

          return { x, y };
        }}
        onDragEnd={(e) => {
          setStageX(e.currentTarget.getPosition().x);
          setStageY(e.currentTarget.getPosition().y);
        }}
        style={{ cursor: "move" }}
      >
        <Layer ref={layerRef as any}>
          <Grid color={strokeColor} cellSize={CELL_SIZE} />
          <Circle x={200} y={100} radius={50} fill="green" draggable />
        </Layer>
      </Stage>

      <BackToCenterButton
        onClick={() => {
          setStageX(0);
          setStageY(0);
          setStageScale(1);
        }}
      />
    </>
  );
};

export default Board;
