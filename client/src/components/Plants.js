import React, {useEffect, useState} from 'react'
import PlantLink from './PlantLink'
import {NavLink} from 'react-router-dom'

function Plants() {
    const[plants, setPlants] = useState([])
    // const[tips, setTips] = useState([])
    // const [user, setUser]=useState([])
    // const [plant, setPlant] =useState({})



    useEffect(() => {
        fetch('/plants')
            .then(res => res.json())
            .then(data => {
                setPlants(data)
            })
    }, [])

    const plantList = plants.map(p => <PlantLink key={p.id} plant={p}/>)

    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
        background: 'black'
    }

    return (
        <>
        <div>
            <h1>Plants</h1>
            {plantList}
        </div>
        <nav>
        <NavLink
        to="/plants/new"
        style={link}
        >Add Plant</NavLink>
        </nav>
        </>
    )
}

export default Plants