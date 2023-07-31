import React from "react";

import { FooterAbout } from "./FooterAbout";
import { FooterNavigation } from "./FooterNavigation";
import { BeFirst } from "./BeFirst";

const Footer = () => {
    return (
        <footer className="container-fluid row">
            <FooterAbout />
            <FooterNavigation />
            <BeFirst />
        </footer>
    )
}

export { Footer };