import React, { useContext } from 'react'
import Createcontext from '../../../Hooks/Context'
const Wronglocation = ({title ,description}) => {
  const {state ,dispatch}=useContext(Createcontext)
  let image=''
  if(title?.includes('dispensaries')){
    image='/image/error.webp'
  }else{
    image='/image/errorimage.webp'
  }
  return (
      <div className="nodatafoundcontainer">
            <img src={image} alt='Image' />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={()=>{dispatch({ type: 'locationchange', focus: true })}}>Change Location</button>
     </div>
  )
}

export default Wronglocation