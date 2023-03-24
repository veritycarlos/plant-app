import React, { useState, useContext, useParams} from 'react'
import { UserContext } from '../context/user'

const TipForm = () => {
    const [title, setTitle ] = useState("");
    const [comment, setComment ] = useState("");  
    const {addTip, plant, errors} = useContext(UserContext)


    const handleSubmit = e => {
        e.preventDefault();
        addTip({
            title: title,
            comment: comment,
            plant_id: plant.id
        })
    }

    return (
    <div>
        <h3>Add Plant Tip:</h3>
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor='title'>Title: </label>
                <input 
                    type="text" 
                    id="title"
                    value={ title } 
                    onChange={ (e) => setTitle(e.target.value)}
                /> <br/>
            </div>
            <div>
                <label htmlFor="comment">Plant Tip: </label>
                <input 
                    type="text" 
                    id="comment"
                    value={ comment } 
                    onChange={ (e) => setComment(e.target.value)}
                /> <br/>
            </div>
            <br/>
            <input type="submit" value="Add New Tip" />
            {errors ? (errors.map((error) => {return <p >{error}</p>})) : null }
        </form>
    </div>
    )
}

export default TipForm