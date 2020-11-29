
import './App.css';
import {React, Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Container} from 'react-bootstrap'; //*
import 'bootstrap/dist/css/bootstrap.min.css';

import Todos from './components/Todos.js'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo.js';

import uuid from 'react-uuid' /*https://www.npmjs.com/package/react-uuid */



class App extends Component {

    state ={
        todos: [
            {
                id: 1,
                title: 'React Crash Course - simple todo app',
                completed: true,
            },
            {
                id: 2,
                title: 'Build an Expense Tracker | React Hooks & Context API',
                completed: false,
            },
            {
                id: 3,
                title: 'Node.js & Express API | Expense Tracker - Part 2 (MERN)',
                completed: false,
            },
            {
                id: 4,
                title: 'Some MERN stack App',
                completed: false,
            },
        ]

    }

    //Toggle status
    markComplete = (id) => {
       // console.log('App.js ----- id: ', id ) 
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

    addTodo = (title) => {
      //  console.log('App.js -- addTodo -- title: ', title);
        const newTodo ={
            id: uuid(),
            title: title,
            completed: false
        }
        this.setState({ todos:[...this.state.todos, newTodo] })
    }

render () {
    
  
   // console.log( this.state.todos)

        return (  
            //??
 <Router>   
        < div className = "App" >   
        <Header />
     
        

    
        <Container fluid>
        <AddTodo addTodo={this.addTodo} />
      
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo} />
            </Container>

      

  


    
        
        </div>

</Router>
);
}
   
}

export default App;