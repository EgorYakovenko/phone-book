import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

import { logOut } from '../../redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome: {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
