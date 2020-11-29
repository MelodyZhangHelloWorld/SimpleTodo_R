import React from 'react'
import logo from '../../logo.svg';
import {Row} from 'react-bootstrap'; 

 function Header() {
    return (
        <div>
            <header style={headerStyle}>
            <Row className="justify-content-center">
            <img src={logo} className="App-logo" alt="logo" 
            style={{width: 100, height: 100, position: 'relative'}}/>
<h1 className="mt-4"> Todo List</h1>
            </Row>

</header>
        </div>
    )
}

const headerStyle = { 
    background:'#333',
    color:'#fff',
   
  
}

export default Header;