import React from "react";
import {MDBCol,MDBCard,MDBCardBody,MDBCardText,MDBIcon,} from "mdbreact";

const Card = (props) => {
       return(
        <MDBCol xl="3" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                    <MDBIcon icon="money-bill-alt" className="primary-color"/>
                    <div className="data">
                        <p>{props.title}</p>
                        <h4>
                        <strong>{props.value}</strong>
                        </h4>
                    </div>
                </div>
                
            </MDBCard>
      </MDBCol>

    );
}

export default Card;