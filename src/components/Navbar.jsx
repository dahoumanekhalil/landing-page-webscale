// src/components/Navbar.jsx
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // take mode (dark mode or light mode ) from local storage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700 transition-colors
      ${darkMode ? "bg-darkBg text-white" : "bg-white/70 text-black"}`}
    >
      <div className="container px-4 mx-auto relative flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-xl font-bold tracking-tight">
            ملتقى WEBSCALE
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-14 space-x-12 rtl:space-x-reverse">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
          <a
            href="#register"
            className="py-2 px-3 border rounded-md hover:bg-gray-200 dark:hover:bg-orange-900 transition"
          >
            تسجيل الحضور
          </a>
          <a
            href="#about"
            className="bg-gradient-to-r from-primary to-[#715a1a]  py-2 px-3 rounded-md hover:opacity-90 transition"
          >
            تفاصيل الملتقى
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border hover:bg-neutral-200 hover:scale-110 dark:hover:bg-neutral-700 transition"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400 hover:text-yellow-400" /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div
          className={`lg:hidden p-6 flex flex-col items-center space-y-6 transition-colors
            ${darkMode ? "bg-darkBg text-white" : "bg-white text-black"}`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-primary transition"
              onClick={() => setMobileDrawerOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="py-2 px-3 border rounded-md"
            onClick={() => setMobileDrawerOpen(false)}
          >
            تسجيل الحضور
          </a>
          <a
            href="#about"
            className="py-2 px-3 rounded-md bg-gradient-to-r from-primary to-[#715a1a] text-white"
            onClick={() => setMobileDrawerOpen(false)}
          >
            تفاصيل الملتقى
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
