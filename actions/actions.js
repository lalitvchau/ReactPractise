export const ADD_TODO = 'ADD_TODO'
export const ADD_NAME = 'ADD_NAME'

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

export function addName(text) {
   return {
      type: ADD_NAME,
      id: nextTodoId++,
      text
   };
}