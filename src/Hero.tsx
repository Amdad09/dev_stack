import heroImage from './assets/banner.png';
import Button from './components/ui/Button';
import Container from './components/ui/Container';

const Hero = () => {
    return (
        <Container className="py-10 sm:py-14 md:py-18 lg:py-20">
            <div className="flex flex-col-reverse items-center gap-10 lg:flex-row-reverse lg:gap-16">
                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        alt="Banner"
                        src={heroImage}
                        className="w-full rounded-2xl object-contain "
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Build Your Ideal <br />
                        <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="py-5 text-sm leading-6 text-slate-600 sm:text-base">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>

                    <div className="flex flex-row gap-3 sm:gap-4">
                        <Button
                            className="w-full bg-linear-to-r from-[#F97316] to-[#EC4899] sm:w-auto"
                            rounded="lg"
                        >
                            Explore Technologies
                        </Button>

                        <Button
                            variant="danger"
                            className="w-full border-slate-300 text-slate-600 sm:w-auto"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
