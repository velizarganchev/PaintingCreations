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
            <TrustUs/>
            <Services />
            <Contact/>
        </>);
}

export default Dashboard;