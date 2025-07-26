import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности ↓',
    sortProperty: '-rating',
  },
}

const filerSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
  },
})

export const { setCategoryId } = filerSlice.actions
export default filerSlice.reducer
