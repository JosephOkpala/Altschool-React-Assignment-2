import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="" className="logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users/all">Users</NavLink>
        </li>
        <li>
          <NavLink to="/test">Click Me</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
