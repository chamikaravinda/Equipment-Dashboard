import React, { useEffect} from "react";
import Card from "../shared/card";
import { connect } from "react-redux";
import { MDBContainer, MDBRow } from "mdbreact";
import { getEquipment } from "../action/equipment.action";

const Home =(props) =>{
    useEffect(() => {
        props.onGetEquipmentDetails();
        console.log(props.equipment.length)
      }, []);

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

const mapStateToProps = (state) => {
    return {
      equipment: state.equipmentData.equipmentTypes || [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onGetEquipmentDetails: () => {
        dispatch(getEquipment());
      },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);