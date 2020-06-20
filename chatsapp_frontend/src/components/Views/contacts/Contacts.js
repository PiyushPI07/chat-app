import React, { useState, Component } from 'react';
import {Card, CardTitle, Row, Col, Navbar} from 'react-bootstrap';
import {RecentActors, Person, Room} from '@material-ui/icons'
import './contacts.css'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {updateReciepient,updateLoggedInUser,updateHistory } from '../../../redux/actionCreator';

const mapStateToProps = state => {
    return {
        reciepient: state.reciepient,
        message: state.message,
        history: state.history,
        userLoggedIn: state.loggedInUser,
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateHistory: (new_history) => dispatch(updateHistory(new_history)),
    updateLoggedInUser: (new_user) => dispatch(updateLoggedInUser(new_user)),
    updateReciepient: (reciepientName) => dispatch(updateReciepient(reciepientName))
})

class Contacts extends Component{
    constructor() {
        super();
        this.state = {
            list : [],
        };
        this.server = "http://localhost:5000/";

    };

    async componentDidMount(){
        fetch('http://localhost:5000/contacts', {
            method: "get",
            headers: {
                "Content-type": "application/json"
            },
        }).then(res => res.json())
          .then(data => this.setState({list:data}))


          
    }



    async getHistory() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "to": this.props.reciepient, "from": this.props.loggedinUser });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            credentials: 'include'
        };

        await fetch("http://localhost:5000/message/history", requestOptions)
            .then(response => response.json())
            .then(async result => {
                await this.props.updateHistory(result);
                console.log("response from server: ",result)
                console.log('history prop: ',this.props.history)
            })
            .catch(error => console.log('error', error));

    }

    render() {
        const contact = this.state.list.map((user) => {
            while(user.username != this.props.loggedinUser){
                return (
                    <Card className="contact-card" onClick={
                        async () => {
                            await this.props.updateReciepient(user.username);
                            console.log(this.props.reciepient);
                            this.getHistory()
                        }}>
                        <Row>
                            <Col className="justify-content-center" xs={2}>
                                <Person />
                            </Col>
                            <Col xs={10}>
                                <Card.Title key={user.id}>{user.username}</Card.Title>
                            </Col>
                        </Row>
                    </Card>

                )
            }
           
        })
        return (
            <div >
                <Navbar className="navbar ">
                    <RecentActors style={{ fontSize: 40 }}/>
                    <Navbar.Brand className="brand-logo" style={{margin:"5px 5px 5px 15px"}}>Contacts</Navbar.Brand>
                </Navbar>
        

                {/* <h2 className="brand-logo">ChatsApp</h2> */}
                <div className="contact-div">
                    {contact}
                </div>
            </div>

        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts));