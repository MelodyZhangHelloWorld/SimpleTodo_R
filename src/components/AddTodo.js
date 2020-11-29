import React, { Component } from 'react'
import { Col, Form, Button } from 'react-bootstrap'; //*


export class AddTodo extends Component {

    


    addTodo(){
        console.log('AddTodo!!!')
    }

    render() {
        return (
            <div>
      <Form className="mb-3">
<Form.Row className="justify-content-center" >

  <Col  xs lg xl='7' >  <Form.Control type="text" name='title' 
    placeholder="Add New Todo Item.." /></Col>
  
<Col  xs lg xl='1' >
<Button as="input" type="submit" variant="success"  value='Add'
  onClick={this.addTodo} />
</Col>
</Form.Row>


</Form>
            </div>
        )
    }
}

export default AddTodo
