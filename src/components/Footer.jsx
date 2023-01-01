import React from "react";
import { Link } from 'react-router-dom';
import logo from '../logopc.png'

import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={logo} alt="logo" className='logo rounded' />

                </Link>
                <span className="mb-3 mb-md-0 text-muted">© 2022 Paintingcreations</span>
            </div>

            <ul className="nav col-md-4 align-items-center justify-content-end list-unstyled d-flex">
                <li><a href="tel:+359889729510" className="nav-link px-2 link-secondary"><BsTelephone /> Телефон за връзка 088888888</a></li>
                <li className="ms-3"><a href="https://www.facebook.com/sergei.sredkov" className="text-muted"><BsFacebook /></a></li>
                <li className="ms-3"><a href="https://www.instagram.com/sergey_sredkov/" className="text-muted"><BsInstagram /></a></li>
            </ul>
        </footer>);
}

export default Footer;