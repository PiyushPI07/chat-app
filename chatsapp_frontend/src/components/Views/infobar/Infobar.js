import React, { useState, Component } from 'react';
import { Col, Navbar, NavbarBrand, NavbarText, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Infobar extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand text-secondar">{this.props.username}</a>
            </nav>
        )
    }
};



export default Infobar;