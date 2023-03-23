import React, { useState, useEffect} from 'react'

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [plants, setPlants] = useState ({})
    const [plant, setPlant] = useState({})
    const [tips, setTips] = useState ({})
    const [tip, setTip] = useState({})

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
        fetch(`/plants/${plant.id}/tips/${tip.id}`)
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
        .then(res => res.json())
        .then(data => {
            setPlants([...plants, data])
        })
    }

    const addTip = (tip) => {
        fetch(`/plants/${plant.id}/tips`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(tip)
        })
        .then(res => res.json())
        .then(data => {
            setTips([...tips, data])
        })
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
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, plants, tips, addPlant, addTip }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }; 