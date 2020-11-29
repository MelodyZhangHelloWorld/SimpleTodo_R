//with ES7 React.. extension installed, "rec TAB" generates the following

import React, { Component } from 'react'
import PropTypes from 'prop-types'; //***
// import {  InputGroup,  } from 'react-bootstrap'; //*

export class TodoItem extends Component {
    getStyle = () => {

      
            return {
              
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'

            }
       
        }
    
        markComplete = (evt) =>{
            console.log(this.props)
        }

      



    render() {
        const { id, title } = this.props.todo; //** destructuring -- simplify */
        return ( 
            <div style={this.getStyle()} > 

                 
          
        <input type="checkbox" 
        onChange={this.props.markComplete.bind(this, id)} /> {" "}
             { title} 
               
                
            </div>
        )
    }
}
// define the prop types of this class...
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

// const itemStyle ={
//     backgroundColor: '#f4f4f4'
// }


export default TodoItem
