import donorTypes from './donorTypes'
const {Set_Donor_Success, Set_Donor_Failed, Get_Donor_Success, Get_Donors_Failed, Fetch_Donors_Start} = donorTypes;

const Initial_State = {
    donors: [],
    getDonorsError: null,
    setDonorError: null,
    donorCreated:null,
    isLoading: false
}

export const donorReducer = (state= Initial_State, action)=>{
    const {type,payload} = action;
    switch(type){
        case Set_Donor_Success:
            return { 
                ...state,
                donorCreated: payload
            }
            case Set_Donor_Failed:
                return{
                    ...state,
                    setDonorError: payload
                }
                case Get_Donor_Success:
                    return{
                        ...state,
                        donors: payload
                    }
                    case Get_Donors_Failed:
                        return{
                            ...state,
                            getDonorsError: payload
                        }
                        case Fetch_Donors_Start:
                            return{
                                ...state,
                                isLoading: true
                            }
            default:
                return state

    }
}