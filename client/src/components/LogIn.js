// import React from 'react'

// function LogIn() {
//   return (
//     <div>
//         <h1>Login</h1>
//     </div>
//   )
// }

// export default LogIn

import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorList, setErrorList] = useState([])
    const {login} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                username: username,
                password: password 
            })
        })
        .then(res => res.json())
        .then(user => { 
            if (!user.errors) {
                login(user)
                navigate ('/')
            } else {
                setUsername("")
                setPassword("")
                const errorLi = user.errors.map(e => <li>{e}</li>)
                setErrorList(errorLi)
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br/>
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                {errorList}
            </ul>
        </div>
    )
}

export default Login
