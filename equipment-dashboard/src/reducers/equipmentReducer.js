import { GET_ALL_EQUIPMENT_SUCCESS,GET_OPERATIONAL_STATUS_SUCCESS} from "../action/types";

const equipmentInitialState = {
    equipmentTypes: [],
    operationalStatus:[]
};      

const equipmentReducer = (state = equipmentInitialState, action ) =>{
    switch(action.type){
        case GET_ALL_EQUIPMENT_SUCCESS:
            return { ...state, equipmentTypes : action.payload};
        case GET_OPERATIONAL_STATUS_SUCCESS:
            return { ...state, operationalStatus : action.payload};
        default:
            return state;
    }
}

export default equipmentReducer;