import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, test } from './redux/slices/filterSlice'
import {
  inputDigit,
  setOperation,
  equal,
  clear,
} from './redux/slices/calculatorSlice'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export const SearchContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const count = useSelector((state) => state.counter.count)
  const display = useSelector((state) => state.calculator.display)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <span>{display}</span>
      <hr />
      <br />
      <button onClick={() => dispatch(inputDigit('7'))}>7</button>
      <button onClick={() => dispatch(inputDigit('8'))}>8</button>
      <button onClick={() => dispatch(inputDigit('9'))}>9</button>
      <br />

      <button onClick={() => dispatch(inputDigit('4'))}>4</button>
      <button onClick={() => dispatch(inputDigit('5'))}>5</button>
      <button onClick={() => dispatch(inputDigit('6'))}>6</button>
      <br />

      <button onClick={() => dispatch(inputDigit('1'))}>1</button>
      <button onClick={() => dispatch(inputDigit('2'))}>2</button>
      <button onClick={() => dispatch(inputDigit('3'))}>3</button>
      <hr />
      <br />
      <button onClick={() => dispatch(setOperation('+'))}>+</button>
      <button onClick={() => dispatch(setOperation('-'))}>-</button>
      <button onClick={() => dispatch(setOperation('*'))}>*</button>
      <button onClick={() => dispatch(setOperation('/'))}>/</button>
      <button onClick={() => dispatch(equal())}>=</button>
      <button onClick={() => dispatch(clear())}>C</button>
      <br></br>
      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button aria-label="Test value" onClick={() => dispatch(test())}>
        Test
      </button> */}
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </SearchContext.Provider> */}
    </div>
  )
}

export default App
