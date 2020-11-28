
import React, { Component } from 'react'  //imc
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //***

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
           <TodoItem  
                key={todoForEach.id}
                todo={todoForEach}
           />
            )
        )
    }
}


// define the prop types of this class...
Todos.propTypes = {
    todos:PropTypes.array.isRequired
}

export default Todos;