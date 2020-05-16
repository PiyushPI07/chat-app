import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import M from 'materialize-css'



const Signup = () => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const history = useHistory();

    const postInfo = () => {
        fetch('http://localhost:5000/register', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                name,
                phone
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    M.toast({ html:data.error });
                    return
                }
                else{
                M.toast({html: data.message})
                history.push('/signin')
                }
            }
            )

    }

    return (
        <div className="mycard">
            <div classsname ="card auth-card">
                <h2  className="brand-logo">ChatsApp</h2>
                
                    <input
                        type="text"
                        placeholder="Name"
                        value= {name}
                        onChange = {e => setName(e.target.value)}
                         />

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}                        
                        />

                    <input
                        type="text"
                        placeholder="Password"   
                        value={password}
                        onChange={e => setPassword(e.target.value)}                    
                        />

                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />


                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <button className="btn waves-effect waves-light" type="submit"
                    onClick = {() => postInfo()} >Signup
    
                    </button>
                    <Link to='/signin'>Already have an account?</Link>
                </div>
                    
            
            
            </div>
        </div>
    )
}


export default Signup;