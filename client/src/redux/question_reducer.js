import { createSlice } from "@reduxjs/toolkit"


export const questionReducer = createSlice({
    name:'question',
    initialState:{
        queue:[],
        answer:[],
        trace:0
    },
    reducers:{
        startExamAction : (state,action)=>{
            return{
                ...state,
                queue:action.payload
            }
        }
    }
})

export const {startExamAction} = questionReducer.actions

export default questionReducer.reducer;