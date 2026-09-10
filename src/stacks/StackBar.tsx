import { use, useState } from 'react';
import Container from '../components/ui/Container';
import AllStackBoard from './AllStackBoard';
import MyStackBoard from './MyStackBoard';
import { toast } from 'react-toastify';
type Badge = 'Popular' | 'Trending' | 'Essential' | 'Modern' | 'Cloud';

export interface StackType{
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: Badge;
}

interface StackBarProps {
    stacksFetch: Promise<StackType[]>;
}

const StackBar = ({ stacksFetch }: StackBarProps) => {
    const stacks = use(stacksFetch);
    const [myStacks, setMyStacks] = useState<StackType[]>([])
    
    const handleAddStck = (stack: StackType) => {
        const alreadySelected = myStacks.some(s => s.id === stack.id);
        if (alreadySelected) {
            toast(stack.name +' Already selected!');
        } else {
            toast.success(`${stack.name} is added on your stack!`)
            setMyStacks(prev => [...prev, stack]);
        }
    };

    const handleDelete = (id: string) => {
        toast.success(`Stack is deleted!`);
        setMyStacks(prev => prev.filter(s => s.id !== id));
    };

    return (
        <div className="pb-12 mb:pb-14 lg:pb-16">
            <Container>
                <>
                    <h1 className="text-4xl font-extrabold">
                        Explore the{' '}
                        <span className="text-pink-600/70">Technologies</span>
                    </h1>
                    <p className="text-slate-600 text-base pt-3 pb-12">
                        Pick one technology per category to build your ideal
                        stack.
                    </p>
                </>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-3">
                        <AllStackBoard
                            stacks={stacks}
                            onAdd={handleAddStck}
                            myStacks={myStacks}
                        />
                    </div>
                    <div className="flex-1">
                        <MyStackBoard
                            myStacks={myStacks}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StackBar;
