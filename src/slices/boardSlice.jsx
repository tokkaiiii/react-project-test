import {createSlice} from "@reduxjs/toolkit";

const initState = ''


const boardSlice = createSlice({
  name:'boardSlice',
  initialState: initState,
  reducers:{
    add:(state,action)=>{
      console.log(action.payload)
      return action.payload
    }
  }
})

export const {add} = boardSlice.actions

export default boardSlice.reducer