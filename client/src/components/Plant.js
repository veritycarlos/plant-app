import React, {useEffect, useState } from 'react'
import { useParams, NavLink, useNavigate} from 'react-router-dom'
import TipForm from './TipForm'
import TipList from './TipList'
import { UserContext } from '../context/user'

function Plant() {
    const[plant, setPlant] = useState([])
    const [plants, setPlants] = useState([])
    const params = useParams();
    const navigate = useNavigate();
    const[tips, setTips] = useState([])
    const [user, setUser]=useState([])

    const addTip = (tip) => {
        setTips([...tips, tip])
    }

    useEffect(() => {
        fetch(`/plants/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPlant(data)
            })
    }, [])

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

    // const tips = plant.tips.map(t => <TipLinks key={t.id} tip={t} plant={plant}/>)

    return (
        <div>
            <h1>{plant.name}</h1>
            <br/>
            <img src={plant.image} alt="plant_photo" />
            <br/>
            {/* {tips} */}
            <br/>
            <button onClick={ () => deletePlant( plant.id )}>Delete</button>
            <br/>
            <p><NavLink to={`/plants/${plant.id}/edit`}>Edit Plant</NavLink></p>
            <br/>
            <TipList tips={tips} />
            <br/>
            <TipForm plant={plant} user={user} addTip={addTip} />
            <br/>
        </div>
    )
}

export default Plant