//with ES7 React.. extension installed, "rec TAB" generates the following

import React, { Component } from 'react'
import PropTypes from 'prop-types'; //***

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title}</p>
            </div>
        )
    }
}
// define the prop types of this class...
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}
export default TodoItem
