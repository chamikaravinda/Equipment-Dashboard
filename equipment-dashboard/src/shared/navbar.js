import React from "react";
import {MDBNavbar,MDBNavbarBrand,} from "mdbreact";

const Navbar = (props) => {
       return(
         <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">Equipment Dashboard</strong>
            </MDBNavbarBrand>
        </MDBNavbar>
    );
}

export default Navbar;