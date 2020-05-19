import React, { useState, Component } from 'react';
import {InputGroup, Input, Button,Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Inputmsg extends Component {

    constructor(props){
        super(props);        
    }

    render(){
        return(
            <InputGroup>
                    <Col md={10}><Input placeholder="type..."></Input></Col>
                    <Col md={2}>
                        <Button>send</Button>
                    </Col>
            </InputGroup>

        )
    }


}


export default Inputmsg;