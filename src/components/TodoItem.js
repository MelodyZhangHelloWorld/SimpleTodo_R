//with ES7 React.. extension installed, "rec TAB" generates the following

import React, { Component } from 'react'
import PropTypes from 'prop-types'; //***
import {  Alert,Button, Row, Col  } from 'react-bootstrap'; //*

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
            

                 
        <Row className="justify-content-center">
        
        <Col md={8}>
        <Alert variant="info">
       
      <Row>
      
       <Col xs lg xl='10'   >
       <Row className="justify-content-left">
       <div style={this.getStyle()} > 
       <input type="checkbox"  className="m-2"
        onChange={this.props.markComplete.bind(this, id)} /> {" "}
             { title} {' '}   </div>
        </Row>
       </Col>
     
       <Col xs lg xl='2'>
       <Row className="justify-content-end">
             <Button className="mr-2"
             onClick={this.props.delTodo.bind(this, id)}
             className='btn'
             variant="danger" size="sm">X</Button>{' '}
            </Row>
             </Col>
             
      </Row>

             
       
            </Alert>
        </Col>
        </Row>
                
            
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
