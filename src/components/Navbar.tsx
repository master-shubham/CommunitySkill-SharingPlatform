import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface NavItem{
  path:string;
  label:string
}

  const publicLinks: NavItem[] = [
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
  ];
  const privateLinks: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/profile", label: "Profile" },
  ];

const Navbar = () => {
  const { isLoggedIn ,logout} = useAuth();


  return (
    <nav className="bg-blue-950 text-white px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-yellow-400">SkillShare</h1>

      {/* Links */}
      <div className="flex gap-6 items-center">
        {(!isLoggedIn ? publicLinks : privateLinks).map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold"
                : "hover:text-yellow-300 transition"
            }
          >
            {link.label}
          </NavLink>
        ))}
        {isLoggedIn && (
          <button
            onClick={logout}
            className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
