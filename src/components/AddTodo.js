import React, { Component } from 'react'
import { Col, Form, Button } from 'react-bootstrap'; //*


export class AddTodo extends Component {

    state = {
        title:'',

    }
                        //<Form.Control     name='title'   
    onChange = (e) => this.setState({[e.target.name]: e.target.value} ); //** onChange event

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title); // pass this up
        this.setState({title: ''});
    }


    render() {
        return (
            <div>
                        
      <Form className="mb-4 mt-3" onSubmit={this.onSubmit} >
<Form.Row className="justify-content-center" >

  <Col  xs='10' md={{ span: 5, offset: 2 }} lg={{ span: 5, offset: 2 }} 
  xl={{ span: 7, offset:0}} > 

  <Form.Control type="text" name='title' 
  value={this.state.title}
  onChange={this.onChange}
    placeholder="Add New Todo Item.." /></Col>
  
<Col  xs md lg xl='1' >
<Button  variant="success"  
    type="submit"
  >Add</Button>
</Col>
</Form.Row>


</Form>
            </div>
        )
    }
}

export default AddTodo
