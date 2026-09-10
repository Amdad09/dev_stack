import { use, useState } from 'react';
import Container from '../components/ui/Container';
import AllStackBoard from './AllStackBoard';
import MyStackBoard from './MyStackBoard';
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
    const stacksList = use(stacksFetch);
    const [stacks, setStacks] = useState(stacksList)
    console.log(stacks);
    return (
        <div className="pb-12 mb:pb-14 lg:pb-16">
            <Container>
                <h1 className="text-4xl font-extrabold">
                    Explore the{' '}
                    <span className="text-pink-600/70">Technologies</span>
                </h1>
                <p className='text-slate-600 text-base pt-3 pb-12'>
                    Pick one technology per category to build your ideal stack.
                </p>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-3">
                        <AllStackBoard stacks={stacks} />
                    </div>
                    <div className="flex-1">
                        <MyStackBoard />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StackBar;
