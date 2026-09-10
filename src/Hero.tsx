import heroImage from './assets/banner.png';
import Button from './components/ui/Button';
import Container from './components/ui/Container';
const Hero = () => {
    return (
        <Container className="py-16 md:py-18 lg:py-20">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        alt="Banner"
                        src={heroImage}
                        className="w-full h-70 md:h-90 object-cover rounded-2xl"
                    />
                    <div className="w-full">
                        <h1 className="text-6xl font-extrabold">
                            Build Your Ideal <br />{' '}
                            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="flex gap-4">
                            <Button
                                className="bg-linear-to-r from-[#F97316] to-[#EC4899]"
                                rounded="lg"
                            >
                                Explore Technologies
                            </Button>
                            <Button
                                variant="danger"
                                className="text-slate-600  border-slate-300"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
