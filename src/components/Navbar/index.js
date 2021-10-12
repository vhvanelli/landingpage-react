import React from 'react';
import { Nav, Name, Header } from './styles';

const Navbar = () => {
    return ( 
        <Header>
            <Name>Jhon Doe<span>.</span></Name>
            <Nav>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>What I do?</li>
                    <li>Portifolio</li>
                    <li>Blog</li>
                    <li><span>Contact</span></li>
                </ul>
            </Nav>
        </Header>
     );
}
 
export default Navbar;