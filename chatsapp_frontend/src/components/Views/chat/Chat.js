import React, {useState, useEffect, Component} from 'react';
import {Row, Col, Container, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../message/Message'
import Inputmsg from '../input/Input'
import Contacts from '../contacts/Contacts'
import Infobar from '../infobar/Infobar'


class Chat extends Component{

    constructor(props){
        super(props);
        this.state = {
            userLoggedIn: null,
            reciepient: null,
            message: null,
        };
        this.handler = this.handler.bind(this);
        this.server = "http://localhost:5000/";
        this.ws_server = "ws://localhost:5000/";
        this.ws = new WebSocket(this.ws_server + 'message');
        this.buffer = [];
        this.history = [];
    };

    handler(user) {
        this.setState({ reciepient:user});
    }

    async componentDidMount(){

        this.ws.onerror = (err) => {
            console.log(err);
        }
        this.ws.onmessage = (message) => {
            console.log(message.data);
        };
        await fetch(this.server + 'self', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(data => {
                console.log("data from fettch(/self): ", data);
                this.setState({userLoggedIn: data.phone});
            });

            console.log("Loggedin User: ",this.state.userLoggedIn)
        
    }

    async getHistory(){
        await fetch(this.server + "message/history", {
            method : "POST",
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                from: this.state.userLoggedIn,
                to:this.state.reciepient
            }),
            credentials : 'include'
        }).this(res => res.json())
          .this(data => {
              this.history = [...data];
          })
    }


    Sendmessage = () =>{
        let resp = JSON.stringify({
            from:this.state.userLoggedIn ,
            to: this.state.reciepient,
            type: "text",
            text: this.state.message,
            timestamp: Date.now()
        });
        if (this.ws) {
            this.buffer.map((message) => {
                this.ws.send(message);
            })
            this.buffer.length = 0;
            this.ws.send(resp);
        }
        else {
            console.log("ws not available");
            this.buffer.push(resp);
        }
    }
    


    render() {
        return (
            <div>
                <Container fluid className="container  m-md-auto " >
                    <Row>
                        <Col md={4}>
                            <Contacts handler = {this.handler} />
                        </Col>
                        <Col md={8}>
                            <Row>
                            <Infobar username={this.state.userLoggedIn}/>
                        </Row>
                        <Row>
                            <Message/>
                        </Row>
                        <Row className="inputrow">
                            <Inputmsg/>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    
}


export default Chat;