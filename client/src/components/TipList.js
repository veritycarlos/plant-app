import React, { useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/user'

const TipList = () => {
    const {plant} = useContext(UserContext)

    const tipLis = plant.tips ? plant.tips.map((tip) => <li key={ tip.id }> Title: { tip.title } <br /> Tip: { tip.comment }</li>) : null
    
    return (
      <ul>
        { tipLis }
      </ul>
    )
  }
  
  export default TipList