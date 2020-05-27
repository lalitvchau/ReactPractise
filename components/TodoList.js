import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'
import { ADD_NAME } from '../actions/actions.js';

export default class TodoList extends Component {
   render() {
      return (
         <div>
            {this.props.todos.map(todo => todo.type == ADD_NAME ?
               <ul>

                  <Todo
                     key={todo.id}
                     {...todo}
                  />

               </ul> : <ol>

                  <Todo
                     key={todo.id}
                     {...todo}
                  />

               </ol>)}


         </div>


      )
   }
}