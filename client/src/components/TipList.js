import React, { useState, useEffect, useContext} from 'react'
// import TipLinks from './TipLinks'
import { UserContext } from '../context/user'

const TipList = () => {
    const {plant} = useContext(UserContext)

    const tipLis = plant.tips ? plant.tips.map((tip) => <li key={ tip.id }>{ tip.title } Tip: { tip.comment }</li>) : null
    
    return (
      <ul>
        { tipLis }
      </ul>
    )
  }
  
  export default TipList