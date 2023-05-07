import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </nav>
  );
};

export default Navigation;
