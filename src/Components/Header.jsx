import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const headerlinks = [
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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const location = useLocation();
  console.log("current path: ", location.pathname);

  return (
    <header className="bg-cream py-4 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-text-dark text-2xl font-bold">
            rivermate
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {headerlinks.map((link, ind) => {
            return (
              <>
                {location.pathname === link.path ? (
                  <Link
                    key={ind}
                    to={link.path}
                    className="font-bold underline decoration-stone-900 decoration-2 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link key={ind} to={link.path}>
                    {link.name}
                  </Link>
                )}
              </>
            );
          })}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* <a
            href="#"
            className="text-text-dark flex items-center hover:opacity-80"
          >
            Login <span className="ml-1">→</span>
          </a> */}
          <button className="bg-stone-900 text-white rounded-md py-2 px-4 hover:bg-gray-800">
            Get Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2 text-text-dark">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-16 left-0 right-0 bg-cream z-50 px-6 py-5 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-text-dark hover:opacity-80 py-2">
              Manifesto
            </a>
            <a href="#" className="text-text-dark hover:opacity-80 py-2">
              How it works
            </a>
            <a
              href="#"
              className="text-text-dark hover:opacity-80 py-2 flex items-center"
            >
              Pricing <span className="ml-1">🔥</span>
            </a>
            <a href="#" className="text-text-dark hover:opacity-80 py-2">
              Country explorer
            </a>
            <a href="#" className="text-text-dark hover:opacity-80 py-2">
              For partners
            </a>
            <a href="#" className="text-text-dark hover:opacity-80 py-2">
              Company
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="bg-stone-900 text-white rounded-md w-full py-2 px-4 hover:bg-gray-800">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
