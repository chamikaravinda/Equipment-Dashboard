import { GET_ALL_EQUIPMENT_SUCCESS,GET_OPERATIONAL_STATUS_SUCCESS} from "./types";
import { SERVER_URL, API_ENDPOINT_EQUIPMENT } from "../constant";
import axios from "axios";
import { toast } from "react-toastify";

//get all equipments 
  export const getEquipmentSuccess = (data) => {
    return {
      type: GET_ALL_EQUIPMENT_SUCCESS,
      payload: data,
    };
  };
  
  export const getOperationaStatusSuccess = (data) => {
    return {
      type: GET_OPERATIONAL_STATUS_SUCCESS,
      payload: data,
    };
  };

  export const getEquipment = () => {
    return (dispatch) => {
        return axios.get(`${SERVER_URL}/${API_ENDPOINT_EQUIPMENT}/get-all`)
            .then((response) => {
                let operationalStatus = {
                  operational:response.data.operational,
                  nonOperational:response.data.nonOperational
                }
                dispatch(getOperationaStatusSuccess(operationalStatus));
                dispatch(getEquipmentSuccess(response.data.types));
            }).catch((error) => {
              console.log(error);
              toast.error(error.message, {
                position: "top-center",
              });
            });
    };
  }