import { createSelector } from 'reselect'

const selectDonorReducer = state => state?.donor

export const donorsSelector = createSelector([selectDonorReducer], (donorReducer)=>{
    return donorReducer?.donors
})

export const getDonorsErrorSelector = createSelector([selectDonorReducer], (donorReducer)=>{
    return donorReducer?.getDonorsError
})

export const setDonorErrorSelector = createSelector([selectDonorReducer], (donorReducer)=>{
    return donorReducer?.setDonorError
})

export const isDonorsLoading = createSelector([selectDonorReducer],
    (donorReducer)=>{ 
        return donorReducer?.isLoading
    })