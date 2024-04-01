import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}

export default AuthNav;
