import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            name: 'lalit'
        }
        this.changeName =this.changeName.bind(this);
    }
    changeName(e){
        this.setState({name:e.target.value})
    }
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <input type='text' value={this.state.name} onChange={this.changeName}/>
                <button onClick={(e) => this.handleClick(e)}>
                    Add
            </button>
            </div>
        )
    }
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}
