import React from 'react';
import { Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchBox = ({ searchfield, searchChange,onRouteChange }) => {
    return (
        <div className='pa2 tc'>
            <Navbar bg="#062456" variant="dark">
                <Navbar.Brand href="#home">Stocks UP</Navbar.Brand>
                <Nav className="mr-auto">
                    
                    <Nav.Link href="#" onClick={()=>onRouteChange('Prices')} >Prices</Nav.Link>
                    <Nav.Link href="#" onClick={()=>onRouteChange('News')} >News</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Stocks" className="mr-sm-2 p-3" onChange={searchChange} />
                    
                </Form>
            </Navbar>
     
        </div>

    );
}

export default SearchBox;