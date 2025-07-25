import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    inputDigit: (state, action) => {
      const digit = action.payload

      if (state.waitingForNewValue) {
        state.display = digit
        state.waitingForNewValue = false
      } else {
        if (state.display === '0') {
          state.display = digit
        } else {
          state.display += digit
        }
      }
    },

    setOperation: (state, action) => {
      state.previousValue = +state.display
      state.operation = action.payload
      state.waitingForNewValue = true
    },

    clear: (state) => {
      state.display = '0'
    },

    equal: (state) => {
      const current = parseFloat(state.display)
      const prev = state.previousValue
      const op = state.operation

      if (prev === null || op === null) return

      let result = 0

      switch (op) {
        case '+':
          result = prev + current
          break
        case '-':
          result = prev - current
          break
        case '*':
          result = prev * current
          break
        case '/':
          result = current === 0 ? 'Ошибка' : prev / current
          break
        default:
          return
      }

      state.display = String(result)
      state.previousValue = null
      state.operation = null
      state.waitingForNewValue = true
    },
  },
})

export const { inputDigit, setOperation, equal, clear } =
  calculatorSlice.actions

export default calculatorSlice.reducer
