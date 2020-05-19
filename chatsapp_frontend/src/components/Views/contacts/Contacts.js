import React, { useState, Component } from 'react';
import {Container, ContainerProps ,Card, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import './contacts.css'


class Contacts extends Component{
    constructor() {
        super();
        this.state = {
            list : [],
        };
    };

    componentDidMount(){
        fetch('http://localhost:5000/contacts', {
            method: "get",
            headers: {
                "Content-type": "application/json"
            },
        }).then(res => res.json())
          .then(data => this.setState({list:data}))
          
    }



    render() {
        const contact = this.state.list.map((user) => {
            return (
                    <Card >
                        <CardTitle key = {user.id}>{user.username}</CardTitle>
                    </Card>

            )
        })
        return (
            <div >
                <h2 className="brand-logo">ChatsApp</h2>
                <div className="contact-div">
                    {contact}
                </div>
            </div>

        )
    }
}


export default Contacts;