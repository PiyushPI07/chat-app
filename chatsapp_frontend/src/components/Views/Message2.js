import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
// import './message-style.css'
import {Container, Card, Button,Input, Row , Col, CardTitle} from 'reactstrap'
import Scroll from './Scroll'

const Message2 = () => {

    const postInfo = () => {}

    return (
        <div className="window">
            <Container className="sec_window " style = {{marginTop: "50px", innerHeight: "400px"}}>
                <Row className="mainrow bg-light-gray" width="100%" >
                    <Col data-spy="scroll" className="contact_column col-2 scrolling" style = {{height:"400px"}} >
                        <Scroll>
                            <Row className="bg-dark-gray">Contacts</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                            <Row>piyush</Row>
                        </Scroll>

                    </Col>
                    <Col className="main_chat_col col-10">
                        <Row className="infocard">
                            <Col className="username col-">username</Col>
                            <Col className="logout col-4">logout</Col>
                        </Row>
                        <Card className="chat_card" >
                            <CardTitle>Messagebox</CardTitle>
                        </Card>
                        <Row className="msg_footer">
                            <Col className="col-8">input textbox</Col>
                            <Col className="col-4">Button</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default Message2;