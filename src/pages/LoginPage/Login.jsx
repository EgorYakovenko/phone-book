import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

function Login() {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
}

export default Login;
