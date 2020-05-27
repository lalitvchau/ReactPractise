import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, addName } from './actions/actions'

import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'
import AddName from './components/AddName';
import { Counter } from './hookExample/Counter'

class App extends Component {
   render() {
      const { dispatch, visibleTodos } = this.props
      console.log(this.props)
      return (
         <div>
            <AddTodo onAddClick={text => dispatch(addTodo(text))} />
            <AddName onAddClick={text => dispatch(addName(text))} />
            <TodoList todos={visibleTodos} />
            Hook
            ---------------
            <Counter countDef="10"></Counter>
         </div>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(App);