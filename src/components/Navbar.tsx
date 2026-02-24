import { NavLink } from "react-router-dom";

interface NavItem{
  path:string;
  label:string
}

const Navbar = () => {
  const links:NavItem[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/login",
      label: "Login",
    },
    {
      path: "/register",
      label: "Registe",
    },
    {
      path: "/dashboard",
      label: "Dashboard",
    },
    {
      path: "/profile",
      label: "Profile",
    },
  ];
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
      {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
            }
          >
            {link.label}
          </NavLink>
        ))}
    </nav>
  );
};

export default Navbar;
