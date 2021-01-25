import React, { useEffect,useState} from "react";
import Card from "../shared/card";
import { connect } from "react-redux";
import { MDBContainer, MDBRow } from "mdbreact";
import { getEquipment } from "../action/equipment.action";
import Loader from 'react-loader-spinner'
import { Bar } from "react-chartjs-2";

const Home =(props) =>{
    
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }

    const sampleBorderColor =  [
      "rgba(255, 134, 159, 1)",
      "rgba(98,  182, 239, 1)",
      "rgba(255, 218, 128, 1)",
      "rgba(113, 205, 205, 1)",
      "rgba(170, 128, 252, 1)",
      "rgba(255, 177, 101, 1)"
    ]

    const sampleBackgroundColor = [
      "rgba(255, 134,159,0.4)",
      "rgba(98,  182, 239,0.4)",
      "rgba(255, 218, 128,0.4)",
      "rgba(113, 205, 205,0.4)",
      "rgba(170, 128, 252,0.4)",
      "rgba(255, 177, 101,0.4)"
    ]

    const [databar, setDatabar] = useState([]);

    useEffect(() => {
        props.onGetEquipmentDetails();
        if(props.equipment.length !== 0){
          let labels =[];
          let chartData=[];
          let backgroundColors = [];
          let borderColors = [];

          props.equipment.forEach(item => {
            var colorCode = Math.floor((Math.random() * 6))
            labels.push(item.AssetCategoryID)
            chartData.push(item.amount)
            backgroundColors.push(sampleBackgroundColor[colorCode]);
            borderColors.push(sampleBorderColor[colorCode]);
          });
          
          let bar ={
            labels:labels,
            datasets:[
              {
                label:"Equipment Type",
                data:chartData,
                backgroundColor:backgroundColors,
                borderWidth: 2,
                borderColor:borderColors
              }
            ]
          }

          setDatabar(bar);
        }
      }, []);

    


    if(props.equipment.length===0){
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
                <MDBRow className="mb-4 mt-4" center>
                    <Card value={props.operationalStatus.operational} title ={"Operational"} ></Card>
                    <Card value={props.operationalStatus.nonOperational} title ={"Non-Operational"}></Card>
                </MDBRow>
                <hr></hr>
                <Bar data={databar} options={chartOptions} />

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