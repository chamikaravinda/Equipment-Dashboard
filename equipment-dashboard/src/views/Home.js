import React, { useEffect} from "react";
import Card from "../shared/card";
import { connect } from "react-redux";
import { MDBContainer, MDBRow } from "mdbreact";
import { getEquipment } from "../action/equipment.action";
import Loader from 'react-loader-spinner'

const Home =(props) =>{
    useEffect(() => {
        props.onGetEquipmentDetails();
        console.log(props.equipment.length)
        console.log(props.operationalStatus)
      }, []);

    if(props.equipment.length==0){
      return(
        <Loader
          type="Puff"
          color="#4285F4"
          height={100}
          width={100}
        />
      )
    }else{
      return(
        <div>
            <MDBContainer>
                <MDBRow className="mb-4 mt-4">
                    <Card value={props.operationalStatus.operational} title ={"Operational"} ></Card>
                    <Card value={props.operationalStatus.nonOperational} title ={"Non-Operational"}></Card>
                </MDBRow>
                <h1>Dashboard</h1>
            </MDBContainer>
        </div>
      )
    }
        
}

const mapStateToProps = (state) => {
    return {
      equipment: state.equipmentData.equipmentTypes || [],
      operationalStatus: state.equipmentData.operationalStatus || [],

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