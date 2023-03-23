import React from 'react'
import { NavLink } from 'react-router-dom'

const PlantLink = ({plant}) => {

  return (
    <div>
        <nav>
            <NavLink to={`/plants/${plant.id}`}>
                {plant.name}
            </NavLink>  
        </nav>
        <br/>
    </div>
    
  )
}

export default PlantLink