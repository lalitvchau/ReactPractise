import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import todoApp, { counter } from './reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'DECREMENT' })
store.subscribe(() => console.log(store.getState()))

render(
   <Provider store={store}>
      <App />
   </Provider>,

   rootElement
)