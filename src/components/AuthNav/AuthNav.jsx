import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

function AuthNav() {
  return (
    <div>
      <NavLink className={css.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navLink} to="/login">
        Log in
      </NavLink>
    </div>
  );
}

export default AuthNav;
