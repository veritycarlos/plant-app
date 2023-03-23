import React, { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const Tip = () => {
    const [tip, setTip] = useState({
        plant:[]
    })
    const [tips, setTips] = useState([])
    const params = useParams();
    const navigate = useNavigate();

  
    useEffect(() => {
        fetch(`/tip/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setTip(data)
        })
    }, [])

    const deleteTip = e => {
        fetch(`/tips/${ params.id }`, {method: "DELETE"})
        .then(res => res.json())
        .then (data => { 
            removeTip(params.id)
            navigate(`/tips`)
        })       
    }

    const removeTip = id => {
        setTips(tips.filter( t => t.id != id))
    }
    return (
        <div>
            <br/>
            <h1>{tip.name}</h1>
            <p>{tip.comment}</p>
            <button onClick={ () => deleteTip( tip.id )}>Delete</button>
            <p><NavLink to={`/tips/${tip.id}/edit`}>Edit Tip</NavLink></p>
        </div>
    )
}

export default Tip