import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button ,} from 'react-bootstrap'
import {Person} from '@material-ui/icons'
import {useHistory} from 'react-router-dom'
import './infobar.css'


const Infobar = (props) => {

    const history = useHistory()

        
    const logout = () => {
        fetch("http://localhost:5000/auth/logout", {method: "GET"})
            .then(data => {
                history.push('/signin')
            })
            .catch(err => console.log(err))
    }


        return(
            <Navbar className="navbar">
                <Person style={{fontSize: 50}}/>
                <Navbar.Brand className="user">{props.username}</Navbar.Brand>
                <Button className="logout" style={{float: "right", marginLeft:"500px"}}onClick = {() => logout()} >Logout</Button>
            </Navbar>
        )
    
};



export default Infobar;