import Stack from './Stack';
import type { StackType } from './StackBar';

interface AllStackBoardProps {
    stacks: StackType[];
    onAdd: (stack: StackType) => void;
    myStacks:StackType[]
}

const AllStackBoard = ({ stacks, onAdd, myStacks }: AllStackBoardProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.map((stack) => (
              <Stack key={stack.id} stack={stack} onAdd={onAdd} isSelected={ myStacks.some(s=> s.id === stack.id)} />
            ))}
        </div>
    );
};

export default AllStackBoard;
