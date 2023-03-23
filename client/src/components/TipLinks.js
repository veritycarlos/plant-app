import React from 'react'
import { NavLink } from 'react-router-dom'

const TipLinks = ({tip, plant }) => {

  return (
    <div>
        <nav>
            <NavLink to={`/plants/tips/${tip.id}`}>
                {tip.title}
            </NavLink>  {plant.name}  
        </nav>
        <br/>
    </div>
    
  )
}

export default TipLinks