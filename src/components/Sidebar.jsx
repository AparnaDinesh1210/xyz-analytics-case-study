import { Link } from "react-router-dom";
import logo from "../assets/xyz_logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="XYZ Logo" />

      <Link to="/">Home</Link>
      <Link to="/sales">Sales Dashboard</Link>
      <Link to="/quality">Quality Dashboard</Link>
      <Link to="/info">Info</Link>
    </div>
  );
};

export default Sidebar;