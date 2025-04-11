import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo and Tagline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-purple-200 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 12L11 15L16 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-purple-600 font-bold text-xl">
                returnqueen
              </span>
            </div>
            <div className="text-text-dark">
              <p>You hate returns. We love them!</p>
              <p>We pick up right from your doorstep.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                to="#"
                aria-label="Facebook"
                className="bg-white p-2 rounded-full hover:bg-gray-100"
              >
                <Facebook className="h-5 w-5 text-gray-600" />
              </Link>
              <Link
                to="#"
                aria-label="Twitter"
                className="bg-white p-2 rounded-full hover:bg-gray-100"
              >
                <Twitter className="h-5 w-5 text-gray-600" />
              </Link>
              <Link
                to="#"
                aria-label="Instagram"
                className="bg-white p-2 rounded-full hover:bg-gray-100"
              >
                <Instagram className="h-5 w-5 text-gray-600" />
              </Link>
              <Link
                to="#"
                aria-label="LinkedIn"
                className="bg-white p-2 rounded-full hover:bg-gray-100"
              >
                <Linkedin className="h-5 w-5 text-gray-600" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="#" className="text-text-dark hover:text-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-text-dark hover:text-gray-700">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-text-dark hover:text-gray-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-text-dark hover:text-gray-700">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="#" className="text-text-dark hover:text-gray-700">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link to="#" className="text-text-dark hover:text-gray-700">
                  FAQ
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="text-text-dark">(888) 787-3027</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-text-dark">support@returnqueen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 bg-gray-200" />

        {/* Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} ReturnQueen. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gray-700">
              Terms & Conditions
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
