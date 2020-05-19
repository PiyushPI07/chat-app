import React, { useState, Component } from 'react';
import {Container, Card, CardBodyProps, CardTextProps } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './message.css'
import ScrollToBottom from 'react-scroll-to-bottom';


class Message extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
                <ScrollToBottom className="msgbox col-12">
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                    <Card>message</Card>
                </ScrollToBottom>

        )
    }
}


export default Message;