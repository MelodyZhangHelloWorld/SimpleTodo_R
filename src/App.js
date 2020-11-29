
import './App.css';
import Header from './components/layout/Header';
import {Container, } from 'react-bootstrap'; //*
import 'bootstrap/dist/css/bootstrap.min.css';

import Todos from './components/Todos.js'
import AddTodo from './components/AddTodo.js'
import { Component } from 'react';

class App extends Component {

    state ={
        todos: [
            {
                id: 1,
                title: 'Todo item1',
                completed: false,
            },
            {
                id: 2,
                title: 'Todo item2Todo item2Todo item2Todo item2Todo item2Todo item2',
                completed: false,
            },
            {
                id: 3,
                title: 'Todo item3',
                completed: true,
            },
            {
                id: 4,
                title: 'Todo item4',
                completed: false,
            },
        ]

    }

    //Toggle status
    markComplete = (id) => {
        console.log('App.js ----- id: ', id ) 
        /**  */
        this.setState({todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = ! todo.completed
            }
            return todo;
        }) });

    }

    //Delete Todo

    delTodo =(id) => {
      //  console.log('App.js delTodo ', id)

      this.setState({todos: [...this.state.todos.filter(
          todo => todo.id !== id
      ) ]})
    }

render () {
    
  
    console.log( this.state.todos)

        return (  
    < div className = "App" >   
    <Header />
    <header className = "App-header" >
    <Container fluid>

 
 <AddTodo />
 
   
 <Todos 

 todos={this.state.todos}
 markComplete={this.markComplete}
 delTodo={this.delTodo}
 
 />

        </Container>

    </header> 
    </div>
);
}
   
}

export default App;