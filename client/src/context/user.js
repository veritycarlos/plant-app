import React, { useState, useEffect} from 'react'
import {useParams, useNavigate } from 'react-router-dom'

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [plants, setPlants] = useState ([])
    const [plant, setPlant] = useState([])
    const [tips, setTips] = useState ([])
    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/users/id`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                getPlants()
            }
        })
    }, [])

    const getPlants = () => {
        fetch('/plants')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlants(data)
        })
    }

    const getTips = () => {
        fetch(`/plants/${plant.id}/tips`)
        .then(res => res.json())
        .then(data => {
            setTips(data)
        })
    }

    const addPlant = (plant) => {
        fetch('/plants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(plant)
        })
        .then(res => {
            if (res.ok) {
                res.json().then((data) => setPlants([...plants, data]))
                navigate('/plants')
            } else {
                res.json().then((err) => setErrors(err.error))
            }       
            
        })
    }

    const addTip = (tip) => {
        fetch(`/tips`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(tip)
        })
        .then(res => {             
            if (res.ok) {
                res.json().then((data) => updatePlantTips(data))
            } else {
                res.json().then((err) => setErrors(err.error))
            }   
        })
    }      
            
            
            
        const updatePlantTips = (data) => {
            const updatedPlant = {...plant, tips: [...plant.tips, data]}
            setPlant(updatedPlant)
        }

    const login = (user) => {
        setUser(user)
        getPlants()
        getTips()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setPlants([])
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        getPlants()
        getTips()
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{ user, setPlants, plant, setPlant, setTips, login, logout, signup, loggedIn, plants, tips, addPlant, addTip, errors }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }; 