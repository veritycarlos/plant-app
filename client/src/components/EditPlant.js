import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPlant() {
  const [name, setName]=useState("");
  const [ plant, setPlant] = useState("");
  const {id}=useParams();
  const navigate = useNavigate();

  const handleChange = e => {
    setName(e.target.value)
  }

    useEffect(() => {
        fetch(`/plants/${id}`)
        .then(res => res.json())
        .then(data => {
            setPlant(data)
            setName(data.name)
        })
    }, [])

    const handleSubmit = e => {
      e.preventDefault();
      const headers = {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      }
      const body = {name: name }
      const options = {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(body)
      }
      fetch(`/plants/${id}`, options)
        .then(r => r.json())
        .then(data => {
          navigate(`/plants/${id}`)
        })
    }

  return (
    <div>
      <br/>
      <h1>Edit {plant.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" >Plant:</label>
          <input type="text" id="name" value={name} onChange={handleChange} autoFocus= {true}/>
        </div>
        <br/>
        <input type="submit" value="Update Plant"></input>
      </form>
    </div>
  )
}

export default EditPlant