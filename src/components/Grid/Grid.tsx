import { Group, Line } from "react-konva";

const Grid: React.FC<GridProps> = ({ color, cellSize }: GridProps) => {
  const startX = -window.innerWidth * 10;
  const endX = window.innerWidth * 10;

  const startY = -window.innerHeight * 10;
  const endY = window.innerHeight * 10;

  const lines = [];
  for (let x = startX; x < endX; x += cellSize) {
    lines.push(
      <Line key={`x-${x}`} stroke={color} strokeWidth={1} points={[x, startY, x, endY]} />
    );
  }

  for (let y = startY; y < endY; y += cellSize) {
    lines.push(
      <Line key={`y-${y}`} stroke={color} strokeWidth={1} points={[startX, y, endX, y]} />
    );
  }

  return <Group>{lines}</Group>;
};

export default Grid;

interface GridProps {
  color: string;
  cellSize: number;
}
