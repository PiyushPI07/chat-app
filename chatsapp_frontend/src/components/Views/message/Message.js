import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './message.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {updateMessage, updateHistory} from '../../../redux/actionCreator'

const mapStateToProps = state => {
    return {
        reciepient: state.reciepient,
        message: state.message,
        history: state.history,
    };
}

const mapDispatchToProps = (dispatch) => ({
    updateMessage: (new_message) => dispatch(updateMessage(new_message)),
    updateHistory: (new_history) => dispatch(updateHistory(new_history)),
})


class Message extends Component{

    constructor(props){
        super(props);
        this.state = {
            hstry: this.props.history,
        }
    }


    render(){
        const t_hstry = [...this.props.history];
        console.log("hstry", this.state.hstry)
        console.log("history", this.props.history)
        
        const history_messages = t_hstry.map((msg) => {
            if(msg.from == this.props.loggedInUser){
                return (
                        <Card key={msg.timestamp} className="msg-from-client col-offset-left-8 col-4">
                            <CardBody> {msg.text} </CardBody>
                        </Card>               
                )

            }
            else if(msg.from == this.props.reciepient){
                return (
                    <Card key={msg.timestamp} className='msg-to-client col-offset-8 col-4'>
                        <CardBody> {msg.text} </CardBody>
                    </Card>
                )
            }
        })

        return(
                <ScrollToBottom className="msgbox col-12">
                    {history_messages}
                </ScrollToBottom>

        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message));