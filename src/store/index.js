import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  userId:0,
  show:false,
  data:[],
  createdata:[],
  showcom:false,
  comments:[],
  ticketId:0
}

export const indexSlice = createSlice({
  name:'index',
  initialState,
  reducers: {
    isShow: (state , actions) => {
      state.show = actions.payload.show
    },
    setData :(state,action)=>{
      state.data =[
        ...state.data,
       action.payload.data 
      ]
    },
    setcreateData:(state,action)=>{
      state.createdata = [
        ...state.data,
       action.payload.data 
      ]
    },
    setShowCom:(state,action)=>{
      state.showcom = action.payload.showcom
    },
    setComments:(state,action)=>{
      
        state.comments = [
          ...state.comments,
         {
            comments:  action.payload.comments,
            userId: action.payload.userId,
            ticketId:  action.payload.ticketId
        }
        ]
    },
    setuserId:(state,action)=>{
      state.userId = action.payload.userId
    },
    setTicketId:(state,action)=>{
      state.ticketId = action.payload.ticketId
    }
  },
})

// Action creators are generated for each case reducer function
export const {isShow,setData,setcreateData,setShowCom,setComments,setuserId,setTicketId} = indexSlice.actions

export default indexSlice.reducer