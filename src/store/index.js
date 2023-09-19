import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show:false,
  data:[],
  createdata:[],
}

export const indexSlice = createSlice({
  name:'index',
  initialState,
  reducers: {
    isShow: (state , actions) => {
      state.show = actions.payload.show
    },
    setData :(state,action)=>{
      state.data = action.payload.data 
    
    },
    setcreateData:(state,action)=>{
      state.createdata = [
        ...state.data,
       action.payload.data 
      ]
    }
  },
})

// Action creators are generated for each case reducer function
export const {isShow,setData,setcreateData } = indexSlice.actions

export default indexSlice.reducer