import React from "react";

import { FooterAbout } from "./FooterAbout";
import { FooterNavigation } from "./FooterNavigation";
import { BeFirst } from "./BeFirst";
import { FooterCollections } from "./FooterCollections";

const Footer = () => {
    return (
        <footer className="container-fluid row">
            <FooterAbout />
            <FooterNavigation />
            <BeFirst />
            <FooterCollections />
        </footer>
    )
}

export { Footer };