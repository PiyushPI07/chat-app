import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css'

const Signin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const postInfo = () => {
    fetch('http://localhost:5000/auth/login', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => response.json())
            .then(data => {

                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error });
                    return
                }
                else {
                    M.toast({ html: "Signed in successfully!" })
                    console.log(data)
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    history.push('/message')
                }
            }
            )

    }

    return (
        <div className="mycard">
            <div classsname ="card auth-card">
                <h2 className="brand-logo">ChatsApp</h2>
  
                    <input
                        type="text"
                        placeholder="Username"
                        value = {username}
                        onChange = {e => setUsername(e.target.value)} />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    <button onClick = {() => postInfo()} className="btn waves-effect waves-light" type="submit" >Signin
    
                    </button>
                    <Link to='/signup'>Dont have an account?</Link>
                </div>
            
            
            </div>
        </div>
    )
}


export default Signin;