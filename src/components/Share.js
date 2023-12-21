import React, { useContext } from 'react'
import { AppContext } from '../context';


const Share = () => {
  
  const {roomId , handleonClick} = useContext(AppContext);

  return (
    <>
    <div className="share-co">  
      <h2>Create Room Id</h2>
      <button className="cr-btn" onClick={handleonClick}>Create-Room</button>
      <span>{roomId}</span>
      
    </div>
    
    </>
  )
}

export default Share
