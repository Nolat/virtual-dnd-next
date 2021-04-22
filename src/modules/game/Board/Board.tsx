import { useTheme } from "@chakra-ui/system";
import { SceneCanvas } from "konva/types/Canvas";
import React, { useEffect, useState } from "react";
import { Layer, Stage } from "react-konva";

import useWindowSize from "hooks/useWindowSize";

const Board: React.FC = () => {
  const theme = useTheme();
  const { width, height } = useWindowSize();

  // ? Add border radius to canvas
  const [canvas, setCanvas] = useState<SceneCanvas>();
  useEffect(() => {
    if (canvas) canvas._canvas.style.borderTopLeftRadius = theme.radii["4xl"];
  }, [canvas, theme]);

  return (
    <Stage width={width - 64} height={height - 48}>
      <Layer ref={(ref) => setCanvas(ref?.getCanvas())}></Layer>
    </Stage>
  );
};

export default Board;
