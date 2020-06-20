import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button ,} from 'react-bootstrap'
import {Person} from '@material-ui/icons'
import {useHistory} from 'react-router-dom'
import './infobar.css'


const Infobar = (props) => {

    const history = useHistory()

        



        return(
            <Navbar className="navbar">
                <Person style={{fontSize: 50}}/>
                <Navbar.Brand className="user">{props.username}</Navbar.Brand>
                <Button className="logout" style={{float: "right", marginLeft:"500px"}}onClick = {() => {props.logOut(); history.push('/signin')}} >Logout</Button>
            </Navbar>
        )
    
};



export default Infobar;