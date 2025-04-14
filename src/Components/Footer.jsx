import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const footerlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "FAQs",
    path: "/faq",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="bg-cream py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo and Tagline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="text-text-dark text-2xl font-bold flex items-center"
              >
                <img src={Logo} alt="logo" width={75} />
                <span className="ml-2 text-[#1577ea]">Root Water</span>
              </Link>
            </div>
            <div className="text-text-dark">
              <p>
                Deliver your message with every bottle. Premium water. Powerful
                branding. Perfect match.
              </p>
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
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerlinks.map((link, ind) => {
                return (
                  <>
                    {location.pathname === link.path ? (
                      <li>
                        <Link
                          key={ind}
                          to={link.path}
                          className="font-semibold underline decoration-stone-900 decoration-2 underline-offset-4"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link key={ind} to={link.path}>
                          {link.name}
                        </Link>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className=" text-lg mb-6 font-bold">Support</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="text-text-dark">+91 834 929 6686</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-text-dark">support@rootwater.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 bg-gray-200" />

        {/* Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} RootWater. All Rights Reserved</p>
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
