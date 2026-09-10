import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import Container from '../ui/Container';
const Footer = () => {
    return (
        <div className="border-t border-gray-100 py-16 md:py-18 lg:py-20">
            <Container>
                <footer className="footer sm:footer-horizontal ">
                    <aside className="text-center md:text-left">
                        <a href="/" className="mx-auto md:mx-0 w-fit block">
                            <img src={logo} alt="Logo" />
                        </a>
                        <p className="text-slate-500">
                            Curated tools, technologies, and resources for
                            developers <br /> building modern software.
                        </p>
                        <div className="flex gap-4 mt-4 justify-center md:justify-start mx-auto md:mx-0">
                            <a
                                href="https://github.com/Amdad09"
                                target="_blank"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                            <a
                                href="https://www.youtube.com/@amdadul_09"
                                target="_blank"
                            >
                                <FaYoutube className="text-2xl text-red-600" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/Amdad09"
                                target="_blank"
                            >
                                <FaLinkedin className="text-2xl text-blue-600" />
                            </a>
                        </div>
                    </aside>
                    <nav className="hidden md:flex flex-col">
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="hidden md:flex flex-col">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>

                    <nav className="hidden md:flex flex-col">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <div className="border-t border-slate-100 my-12"></div>
                <p className="text-slate-400 text-center md:text-left">
                    &copy; 2026 Dev Stack. All rights rserved.
                </p>
            </Container>
        </div>
    );
};

export default Footer;
