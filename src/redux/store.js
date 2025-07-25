import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/filterSlice'
import calculatorSlice from './slices/calculatorSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, calculator: calculatorSlice },
})

console.log(store)
