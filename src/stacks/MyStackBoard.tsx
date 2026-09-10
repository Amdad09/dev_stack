import { RxCross1 } from 'react-icons/rx';
import type { StackType } from './StackBar';
import Button from '../components/ui/Button';

interface MyStackBoardProps {
    myStacks: StackType[];
    onDelete: (id: string) => void;
    onDeleteAll: () =>void;
}

const MyStackBoard = ({ myStacks, onDelete, onDeleteAll }: MyStackBoardProps) => {
    return (
        <div className="border border-gray-200 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-800 pb-2">
                Your Stack
            </h3>
            {myStacks.length === 0 ? (
                <div>
                    <p className="text-slate-400 pb-3 text-sm">
                        No technologies selected yet
                    </p>
                    <p className="border border-gray-300 rounded-2xl w-full py-8 flex justify-center items-center text-slate-400">
                        Your stack is empty
                    </p>
                </div>
            ) : (
                <div>
                    <p className="text-slate-400 pb-3 text-sm">
                        {myStacks.length} Technology Selected
                    </p>
                    <div>
                        {myStacks.map((stack) => (
                            <div
                                key={stack.id}
                                className="border border-gray-300 rounded-xl flex justify-between items-center p-4 mb-2"
                            >
                                <div className="flex gap-3 items-center">
                                    <img
                                        src={stack.icon}
                                        className="w-9 h-9"
                                        alt={stack.name}
                                    />
                                    <div>
                                        <h3 className="text-slate-800 font-bold text-base">
                                            {stack.name}
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                            {stack.category}
                                        </p>
                                    </div>
                                </div>
                                <RxCross1
                                    onClick={() => onDelete(stack.id)}
                                    className="cursor-pointer text-xl text-slate-500"
                                />
                            </div>
                        ))}
                        </div>
                        <Button onClick={onDeleteAll} variant='danger' className='w-full mt-8'>Remove All</Button>
                </div>
            )}
        </div>
    );
};

export default MyStackBoard;
