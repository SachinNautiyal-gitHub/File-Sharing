import React, { useContext} from 'react'
import { AppContext } from '../context'

const Recive = () => {
  
  const {handleConnect} = useContext(AppContext);
  
  return (
     <div className="rec-co">
      <h2>Share Your Files Securaly</h2>
       <input type="text" onChange={onchange} />
       <button className="re-btn" onClick={handleConnect}>Connect</button>
     </div>
  )
}

export default Recive
