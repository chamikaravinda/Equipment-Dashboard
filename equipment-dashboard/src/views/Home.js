import React from "react";
import Card from "../shared/card";
import { MDBContainer, MDBRow } from "mdbreact";
const Home =(props) =>{
    return(
        <div>
            <MDBContainer>
                <MDBRow className="mb-4 mt-4">
                    <Card></Card>
                    <Card></Card>
                </MDBRow>
                <h1>Dashboard</h1>
            </MDBContainer>
        </div>
    )
}

export default Home