import React, {useState, useContext} from 'react'
import { UserContext} from '../context/user'

const PlantForm = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const {addPlant} = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault();
        addPlant({
            name: name,
            image: image
        })
    }

  return (
    <div>
        <h3>Add Plant </h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    value={ name } 
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
            </div> 
            <div>
                <label htmlFor="image">Image: </label>
                <input 
                    type="text" 
                    id="image"
                    value={image} 
                    onChange={(e) => setImage(e.target.value)}/>
            </div>
            <br/>
            <input type="submit" value="Add New Plant" />
        </form>

    </div>
  )
}

export default PlantForm