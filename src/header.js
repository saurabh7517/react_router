import React from 'react';
import {Link} from "react-router-dom";
 
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        return(
            <div id="header">
            <Link  to="/">Home</Link>
            <Link  to="/about">About</Link>
            <Link  to="/contactus">Contact Us</Link>
            <Link  to="/login">Login</Link>
            </div>
        )
    }
}

export default Header;