import React, { useState, useContext } from 'react'
// import { useNavigate} from 'react-router-dom';
import { UserContext } from '../context/user'

const TipForm = () => {
    const [title, setTitle ] = useState("");
    const [comment, setComment ] = useState("");
    const {addTip} = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault();
        addTip({
            title: title,
            comment: comment
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
        </form>
    </div>
    )
}

export default TipForm