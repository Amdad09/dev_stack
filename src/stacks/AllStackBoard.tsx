import Stack from "./Stack";
import type { StackType } from "./StackBar";

interface AllStackBoardProps{
  stacks: StackType[];
}

const AllStackBoard = ({ stacks }: AllStackBoardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stacks.map(stack => <Stack key={stack.id} stack={ stack} />)}
    </div>
  );
};

export default AllStackBoard;