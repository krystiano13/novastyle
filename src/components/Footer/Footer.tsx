import React from "react";

import { FooterAbout } from "./FooterAbout";
import { FooterNavigation } from "./FooterNavigation";

const Footer = () => {
    return (
        <footer className="container-fluid row">
            <FooterAbout />
            <FooterNavigation />
        </footer>
    )
}

export { Footer };