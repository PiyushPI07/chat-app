import React, { useState, Component } from 'react';
import { Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToBottom from 'react-scroll-to-bottom';


class Infobar extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
        <Col md={5}>{this.props.username}</Col>
        )
    }
};



export default Infobar;