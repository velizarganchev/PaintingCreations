import React from "react";
import Header from "./Header";
import CurrentProjects from "./CurrentProjects";
import Services from "./Services";
import Contact from "./Contact";
import TrustUs from "./TrustUs";

function Dashboard(params) {

    return (
        <>
            <Header />
            <CurrentProjects />
            <TrustUs />
            <Services />
            <Contact
                ServiceId={process.env.REACT_APP_YOUR_SERVICE_ID}
                TemplateId={process.env.REACT_APP_YOUR_TEMPLATE_ID}
                PublicKey={process.env.REACT_APP_YOUR_PUBLIC_KEY}
            />
        </>);
}

export default Dashboard;