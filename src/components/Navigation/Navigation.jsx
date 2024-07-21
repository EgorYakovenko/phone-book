import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={css.homeLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.homeLink} to="/contacts">
          My contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
