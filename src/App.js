
import './App.css';

// import { Alert , Breadcrumb, Button, Card, Form, FormControl, Nav, Navbar } from 'react-bootstrap'; //*
import 'bootstrap/dist/css/bootstrap.min.css';

import Todos from './components/Todos.js'
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
                title: 'Todo item2',
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
        }) })

    }
render () {
    
  
    console.log( this.state.todos)

    return ( < div className = "App" >   
    <header className = "App-header" >
    
   
        <Todos 
       
        todos={this.state.todos}
        markComplete={this.markComplete}
        
        />

    </header> 
    </div>
);
}
   
}

export default App;