import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import Searchbar from '../components/Searchbar/Searchbar';

class App extends React.Component{
    
    render(){
        return(<div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img id="brand-image" src={require('../img/niB98EKiA.jpg')} width="60" height="45" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link target="new" href="http://imdb.com">Imdb</Nav.Link>
                </Nav>    
            </Navbar.Collapse>
            </Navbar>
            <div className="jumbotron">
                <h1 class="display-4">Title Databse</h1>
                <p class="lead">Welcome to our database of movies. Please enter a title to get started.</p>
                <hr class="my-4"/>
            </div>
            <div className="container-fluid">
            <p className="text-left"></p>
            <div className="form-group">
                <label>MovieTitle Search</label>
                <div className="form-control"><Searchbar/></div>
            </div>            
            </div>
            </div>
        )
    }
}

export default App;