import React from "react";
import { Link } from "react-router-dom";

function TrustUs() {
    return (
        <div className="trust-us p-2 mt-4 mb-4 rounded">
            <div className="container-fluid py-5">
                <h1 className="trust-us-h1 display-5">Доверете ни се</h1>
                <p className="trust-us-p col-md-8 fs-5">Гордеем се с всички отличия и престижни награди.</p>
                <Link to="/contact-us" className="btn btn-light btn-lg" type="button">Получи оферта</Link>
            </div>
        </div>
        );
}
export default TrustUs;