import React from "react";
import {MDBCol,MDBCard,MDBCardBody,MDBCardText,MDBIcon,} from "mdbreact";

const Card = (props) => {
       return(
        <MDBCol xl="3" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                    <MDBIcon icon="money-bill-alt" className="primary-color"/>
                    <div className="data">
                        <p>SALES</p>
                        <h4>
                        <strong>$2000</strong>
                        </h4>
                    </div>
                </div>
                <MDBCardBody>
                    <div className="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                        style={{width: '25%'}}></div>
                    </div>
                    <MDBCardText>Better than last week (25%)</MDBCardText>
                </MDBCardBody>
            </MDBCard>
      </MDBCol>

    );
}

export default Card;