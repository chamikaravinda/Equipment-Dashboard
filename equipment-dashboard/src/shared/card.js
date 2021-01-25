import React from "react";
import {MDBCol,MDBCard} from "mdbreact";

const Card = (props) => {
       return(
        <MDBCol xl="3" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card  mdb-color danger-color" >
                <div className="admin-up">
                    <div className="data">
                        <p className="font-weight-normal" style={{color: "white"}}>{props.title}</p>
                        <h2 >
                        <strong style={{color: "white"}}>{props.value}</strong>
                        </h2>
                    </div>
                </div>
            </MDBCard>
      </MDBCol>

    );
}

export default Card;