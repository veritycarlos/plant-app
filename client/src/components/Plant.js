import React, {useEffect, useState, useContext } from 'react'
import { useParams, NavLink, useNavigate} from 'react-router-dom'
import TipForm from './TipForm'
import TipList from './TipList'
import { UserContext } from '../context/user'

function Plant() {
    const [plants, setPlants] = useState([])
    const params = useParams();
    const navigate = useNavigate();
    const [user, setUser]=useState([])
    const {plant, tips,  setPlant} = useContext(UserContext)

    useEffect(() => {
        console.log(params)
        fetch(`/plants/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPlant(data)
            })
    }, [])

    if (!plant) {
        return(
           <h1>loading</h1>
        )
    }

    const deletePlant = e => {
        fetch(`/plants/${ params.id }`, {method: "DELETE"})
        .then(res => res.json())
        .then (data => { 
            removePlant(params.id)
            navigate(`/plants`)
        })       
    }

    const removePlant = id => {
        setPlants(plants.filter( p => p.id != id))
    }

    return (
        <div>
            <h1>{plant.name}</h1>
            <br/>
            <img src={plant.image} alt="plant_photo" />
            <br/>
            <br/>
            <button onClick={ () => deletePlant( plant.id )}>Delete</button>
            <br/>
            <p><NavLink to={`/plants/${plant.id}/edit`}>Edit Plant</NavLink></p>
            <br/>
            <TipList tips={tips} />
            <br/>
            <TipForm params={params} plant={plant} user={user}  />
            <br/>
        </div>
    )
}

export default Plant

