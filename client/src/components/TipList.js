const TipList = ({ tips }) => {

    const tipLis = tips ? tips.map((tip) => <li key={ tip.id }>{ tip.username } says: { tip.comment }</li>) : null
    
    return (
      <ul>
        { tipLis }
      </ul>
    )
  }
  
  export default TipList