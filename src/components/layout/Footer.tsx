import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import Container from '../ui/Container';
const Footer = () => {
    return (
        <div className="border-t border-gray-100 py-16 md:py-18 lg:py-20">
            <Container>
                <footer className="footer sm:footer-horizontal">
                    <aside>
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                        <p className="text-slate-500">
                            Curated tools, technologies, and resources for
                            developers <br /> building modern software.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="">
                                <FaYoutube className="text-2xl text-red-600" />
                            </a>
                            <a href="">
                                <FaLinkedin className="text-2xl text-blue-600" />
                            </a>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
