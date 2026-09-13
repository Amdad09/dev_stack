import logo from '../../assets/logo.png';
import Button from '../ui/Button';
import Container from '../ui/Container';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <Container className="navbar relative">
                <div className="absolute left-2 lg:hidden">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-sm"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul className="menu menu-sm dropdown-content z-999 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                            {navLinks.map((name) => (
                                <li key={name}>
                                    <span className="text-md font-semibold text-slate-700">
                                        {name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 lg:hidden">
                    <img src={logo} alt="Logo" className="h-6" />
                </div>

                <div className="navbar-start hidden items-center gap-2 lg:flex">
                    <img src={logo} alt="Logo" className="h-6 md:h-8" />
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((name) => (
                            <li key={name}>
                                <span className="text-md font-semibold text-slate-700">
                                    {name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="absolute right-2 flex items-center gap-2 lg:static lg:navbar-end lg:gap-4">
                    <span className="text-xs font-medium text-slate-600 lg:text-base">
                        Sign In
                    </span>

                    <Button
                        rounded="full"
                        size="sm"
                        className="px-3 text-xs lg:px-4 lg:text-sm"
                    >
                        Sign Up
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
