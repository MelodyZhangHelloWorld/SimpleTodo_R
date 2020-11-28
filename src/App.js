
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

render () {
    
  
    console.log( this.state.todos)

    return ( < div className = "App" >   
    <header className = "App-header" >
    
   
        <Todos 
        todos={this.state.todos}
        
        />

    </header> 
    </div>
);
}
   
}

export default App;