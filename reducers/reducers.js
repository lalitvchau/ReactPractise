import { combineReducers } from 'redux'
import { ADD_TODO, ADD_NAME } from '../actions/actions'

function todo(state, action) {
   switch (action.type) {
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
         break;
      case ADD_NAME:
         return {
            id: action.id,
            text: action.text
         }
         break;
      default:
         return state
   }
}
function todos(state = [], action) {
   switch (action.type) {
      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
         break;
      case ADD_NAME:
         return [
            ...state,
            todo(undefined, action)
         ]
      default:
         return state
   }
}
function counter(state = 0, action) {
   switch (action.type) {
      case 'INCREMENT':
         return state + 1
      case 'DECREMENT':
         return state - 1
      default: return state
   }
}
const todoApp = combineReducers({
   todos, counter
})
export default todoApp