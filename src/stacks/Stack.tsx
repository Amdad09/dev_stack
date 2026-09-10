import Button from '../components/ui/Button';
import type { StackType } from './StackBar';

type Badge = 'Popular' | 'Trending' | 'Essential' | 'Modern' | 'Cloud';

const badgeColors: Record<Badge, string> = {
    Popular: 'bg-amber-50 text-amber-600',
    Trending: 'bg-blue-50 text-blue-600',
    Essential: 'bg-green-50 text-green-600',
    Modern: 'bg-purple-50 text-purple-600',
    Cloud: 'bg-cyan-50 text-cyan-600',
};

interface StackProps {
    stack: StackType;
    onAdd: (stack: StackType) => void;
    isSelected: boolean;
}

const StackCard = ({ stack, onAdd, isSelected }: StackProps) => {
    const { name, category, description, icon, rating, difficulty, badge } =
        stack;

    return (
        <div className={`flex flex-col rounded-3xl border ${isSelected?'border-pink-600': 'border-slate-200'} bg-white p-6 shadow-sm`}>
            <div className="flex items-start justify-between">
                <div className="flex flex-row md:flex-col gap-4 md:gap-0">
                    <img src={icon} alt={name} className={`h-7 w-7`} />
                    <h2 className="mt-0 md:mt-4 text-lg font-bold text-slate-900">
                        {name}
                    </h2>
                </div>

                <span
                    className={`rounded-full  px-3 py-1.5 text-sm font-semibold ${badgeColors[badge] || 'bg-slate-50 text-slate-600'} `}
                >
                    {badge}
                </span>
            </div>

            <p className="mt-3 flex-1 text-sm text-slate-500">{description}</p>

            <div className="my-3 border-t border-slate-100" />

            <div className="flex items-center justify-between">
                <span className="rounded-lg bg-slate-100 px-2 py-1 text-sm text-slate-600">
                    {category}
                </span>

                <span className="text-sm text-slate-500">{difficulty}</span>

                <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <span className="text-amber-400">★</span>
                    {rating}
                </span>
            </div>

            <Button
                onClick={() => onAdd(stack)}
                variant={isSelected ? 'success':"secondary"}
                className="w-full mt-4"
                disabled={isSelected}
            >
                Add to Stack
            </Button>
        </div>
    );
};

export default StackCard;
