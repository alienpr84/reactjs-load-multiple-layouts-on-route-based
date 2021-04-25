import { Link } from 'react-router-dom';
import BasePropsType from 'src/types/base-props.type';

export default function AuthTemplate({children}: BasePropsType) {
  return (
    <>
      <header className="auth-template">
        <span className="logo">Auth Template</span>
        <nav>
          <ul>
            <li><Link to="/admin/">Home</Link></li>
            <li><Link to="/auth/register">Register</Link></li>
            <li><Link to="/auth/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}