import React, { useContext} from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }


    if (loggedIn) {
        return (
            <div>
                <button onClick={logoutUser}>Logout</button>
                <hr/>
                <h1>Welcome {user.username}</h1>
                <NavLink to='/plants'>
                    <button>Plants</button>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
                <hr/>
            </div>
        )
    } 

}

export default Navbar
