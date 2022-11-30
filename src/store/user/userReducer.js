import userTypes from "./userTypes";
const {User_Signup_Success, User_Signup_Failed, User_Login_Success, User_Login_Failed} = userTypes;

const Initital_State = {
    user: null,
    token: null,
    isLoggedIn: false,
    loginError: null,
    signupError: null,
    signupSuccess: null,
    users:[],

}
export const userReducer = (state=Initital_State, action)=>{
    const {type,payload} = action;
    switch(type){
        case User_Login_Success:
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isLoggedIn: true
            }
            case User_Signup_Success:
                return{
                    ...state,
                    signupSuccess: payload
                }
                case User_Signup_Failed:
                    return{
                        ...state,
                        signupError: payload
                    }
                    case User_Login_Failed:
                        return{
                            ...state,
                            loginError: payload
                        }
            default:
                return state
    }
}


