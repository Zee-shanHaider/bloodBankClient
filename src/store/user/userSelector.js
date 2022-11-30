import { createSelector } from "reselect";

const selectUserReducer = state=> state?.user;

export const userSelector = createSelector([selectUserReducer],(userReducer)=>{
    return userReducer.user
})

export const tokenSelector = createSelector([selectUserReducer],
    (userReducer)=>{
        return userReducer.user
    })

export const userLoggedInSelector = createSelector([selectUserReducer],
    (userReducer)=>{
        return userReducer.isLoggedIn
    }) 

export const signupErrorSelector = createSelector([selectUserReducer],
    (userReducer)=>{
        return userReducer.signupError
})

export const loginErrorSelector = createSelector([selectUserReducer],
    (userReducer)=>{
        return userReducer.loginError
    })