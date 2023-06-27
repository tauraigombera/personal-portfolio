import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const MobileMenu = () => {
  const navItems = ["Home", "About", "Projects"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedIndex = searchParams.get("selectedIndex");
    if (storedIndex !== null) {
      setSelectedIndex(parseInt(storedIndex));
    }
  }, [location.search]);

  return (
    <nav>
      <ul className="absolute pt-8 bg-body w-full text-4xl min-h-screen flex flex-col items-center origin-top animate-open-menu text-white md:hidden">
        {navItems.map((navItem, index) => (
          <li
            className={`py-8 ${
              selectedIndex === index ? "text-selected-text" : ""
            }`}
            key={navItem}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <Link
              to={
                navItem === "Home"
                  ? "/"
                  : `/${navItem.toLowerCase()}?selectedIndex=${index}`
              }
              className="hover:text-grayText"
            >
              {navItem}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
