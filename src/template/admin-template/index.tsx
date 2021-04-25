import { Link } from 'react-router-dom';
import BasePropsType from 'src/types/base-props.type';

export default function AdminTemplate({children}: BasePropsType) {
  return (
    <>
      <header className="admin-template">
        <span className="logo">Admin Layout</span>
        <nav>
          <ul>
            <li><Link to="/admin/">Home</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/products">Products</Link></li>
            <li><Link to="/auth/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}