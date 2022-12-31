import { Link } from 'react-router-dom';
import logo from '../logopc.png'
function Navigation() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={logo} alt="logo" className='logo rounded'/>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Начало</Link></li>
          <li><Link to="/Gallery" className="nav-link px-2 link-secondary">Галерия</Link></li>
        </ul>
        <div className="col-md-3 text-end">
          {/* <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button> */}
        </div>
      </header>
    </div>
  );
}

export default Navigation;