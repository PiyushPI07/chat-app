import React, { useState, Component } from 'react';
import {InputGroup, Input, Button,Row, Col,  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateMessage, updateHistory } from "../../../redux/actionCreator";


const mapStateToProps = state => {
    return {
        reciepient: state.reciepient,
        message: state.message,
    };
}

const mapDispatchToProps = (dispatch) => ({
    updateMessage: (new_message) => dispatch(updateMessage(new_message)),
    updateHistory: (new_history) => dispatch(updateHistory(new_history)),

})

class Inputmsg extends Component {

    constructor(props){
        super(props); 
        this.msg = '';
        this.inputref = React.createRef();       
    }

    async getHistory() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "from": this.props.reciepient, "to": this.props.loggedInUser });

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
                console.log("History from Input.js: ",this.props.history)
            })
            .catch(error => console.log('error', error));

    }

    resetinput = () => {
        const input = this.inputref.current.reset();
        console.log("input reset",input)
    }



    render(){
        return(
            <InputGroup >
                <form className="col-12 row" ref={this.inputref}>
                    <Col xs={10}><input

                        className="input"
                        type="text"
                        placeholder="Type a message..."
                        onChange={({ target: { value } }) => this.msg = value}
                    ></input></Col>
                    <Col xs={2}>
                        <Button onClick={async () => {
                            await this.props.updateMessage({
                                from: this.props.loggedInUser,
                                to: this.props.reciepient,
                                text: this.msg,
                            });
                            await this.props.sendmessage();
                            this.getHistory()
                            this.resetinput()
                        }}>send</Button>
                    </Col>
                </form>
                    
            </InputGroup>

        )
    }


}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inputmsg));