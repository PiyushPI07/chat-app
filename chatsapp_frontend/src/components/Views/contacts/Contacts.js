import React, { useState, Component } from 'react';
import {Container, ContainerProps ,Card, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import './contacts.css'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {updateReciepient} from '../../../redux/actionCreator';

const mapStateToProps = state => {
    return {
        reciepient: state.reciepient,
        message: state.message
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateReciepient: (reciepientName) => dispatch(updateReciepient(reciepientName))
})

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
                    <Card onClick = {
                        async() => {await this.props.updateReciepient(user.username); console.log(this.props.reciepient)}}>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts));