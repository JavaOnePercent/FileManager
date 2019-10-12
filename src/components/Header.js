import React from 'react';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";

const Header = (props) => {
    return (
        <div>
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/">FileManager</NavbarBrand>
            </Navbar>
        </div>
    );
};

export default Header;