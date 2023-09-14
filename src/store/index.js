import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show:false
}

export const indexSlice = createSlice({
  name:'index',
  initialState,
  reducers: {
    isShow: (state , actions) => {
      state.show = actions.payload.show
    }
  },
})

// Action creators are generated for each case reducer function
export const {isShow = {isShow} } = indexSlice.actions

export default indexSlice.reducer