import { createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState : {
        user:{},
        token:''
    },
    reducers : {
        logInUser(state,action){
            state.user = action.payload.existUser
            state.token = action.payload.token
        },
        logOutUser(state,action){
            state.user = {}
            state.token = ''
        },
    },
})

export {userSlice}
export const {logInUser, logOutUser} = userSlice.actions