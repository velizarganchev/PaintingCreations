import { Link, Navigate } from 'react-router-dom';
import { BsBoxArrowRight, BsTelephone, BsFacebook, BsInstagram } from "react-icons/bs";
import logo from '../logopc.png';

function Navigation() {
  return (
    <div className="container">
      <ul class="nav align-items-center justify-content-end">
        <li class="nav-item">
          <a href="tel:+359889729510" className="nav-link px-2 link-secondary"><BsTelephone /> Телефон за връзка 088888888</a>
        </li>
        <li class="nav-item">
          <li className="ms-3"><a href="https://www.facebook.com/sergei.sredkov" className="text-muted"><BsFacebook /></a></li>
        </li>
        <li class="nav-item">
          <li className="ms-3"><a href="https://www.instagram.com/sergey_sredkov/" className="text-muted"><BsInstagram /></a></li>
        </li>
      </ul>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={logo} alt="logo" className='logo rounded' />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Начало</Link></li>
          <li><Link to="/Gallery" className="nav-link px-2 link-secondary">Галерия</Link></li>
        </ul>
        <div className="col-md-3 text-end">
          <Link to="/contact-us" className="nav-link px-2 link-secondary"><BsBoxArrowRight /> Получажане На Оферта</Link>
        </div>
      </header>
    </div>
  );
}

export default Navigation;