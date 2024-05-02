import { Link } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 rounded-box">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Maia</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
