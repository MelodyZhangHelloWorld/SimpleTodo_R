import logo from './logo.svg';
import './App.css';
import { Alert , Breadcrumb, Button, Card, Form, FormControl, Nav, Navbar } from 'react-bootstrap'; //*
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( < div className = "App" >
        <header className = "App-header" >
        
        < img src = { logo }
        className = "App-logo"
        alt = "logo"  />
        
        <Button> Test Button </Button>


        </header> 
        </div>
    );
}

export default App;