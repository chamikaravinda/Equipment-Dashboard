import { GET_ALL_EQUIPMENT_SUCCESS} from "../action/types";

const equipmentInitialState = {
    equipmentTypes: [],
};      

const equipmentReducer = (state = equipmentInitialState, action ) =>{
    switch(action.type){
        case GET_ALL_EQUIPMENT_SUCCESS:
            return { ...state, equipmentTypes : action.payload};
        default:
            return state;
    }
}

export default equipmentReducer;