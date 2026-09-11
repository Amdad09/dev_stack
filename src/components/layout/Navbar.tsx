import Button from '../ui/Button';
import Container from '../ui/Container';
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <Container className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{' '}
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-pink-600 text-white rounded-box z-999 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="text-md font-semibold ">Home</a>
                            </li>
                            <li>
                                <a className="text-md font-semibold ">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a className="text-md font-semibold ">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="text-md font-semibold ">About</a>
                            </li>
                            <li>
                                <a className="text-md font-semibold ">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hidden md:flex">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a className="text-md font-semibold  text-pink-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="text-md font-semibold text-slate-700">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a className="text-md font-semibold text-slate-700">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#addStackForm"
                                className="text-md font-semibold text-slate-700"
                            >
                                Add Stack
                            </a>
                        </li>
                        <li>
                            <a className="text-md font-semibold text-slate-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="text-md font-semibold text-slate-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {/* <Button
                        rounded="full"
                        size="sm"
                        variant="danger"
                        className="text-slate-600  border-slate-300"
                    >
                        Sign In
                    </Button> */}
                    <p className="text-slate-600 font-medium">Sign In</p>
                    <Button rounded="full" size="sm">
                        <a href="#register">Sign Up</a>
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
