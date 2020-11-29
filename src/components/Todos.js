
import React, { Component } from 'react'  //imc
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //***

import {  Alert  } from 'react-bootstrap';

// function Todos() {
//     return (
//         <div className="Todos">
//             <h1>Todos</h1>

//         </div>
//     );
// }

class Todos extends Component {

   

    render() {
   //     console.log("Todos.js -- props: ",this.props.todos)
        return this.props.todos.map((todoForEach)=> (
            <Alert variant="info">
            <TodoItem  
                key={todoForEach.id}
                todo={todoForEach} 
                markComplete = {this.props.markComplete}
            ></TodoItem>
        </Alert>
            )
        )
    }
}


// define the prop types of this class...
Todos.propTypes = {
    todos:PropTypes.array.isRequired
}

export default Todos;