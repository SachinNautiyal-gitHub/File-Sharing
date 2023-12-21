import React from 'react'
import { useNavigate } from 'react-router-dom'


const DashBoard = () => {

    const navigate = useNavigate();
  
    const handleShare = () =>{
       navigate('/share');
    }

    const handleRecive = () =>{
        navigate('/recive');
    }

  return (
   <>
    
    <div className="container">
        <h1>File Share</h1>

        <div className="con">
            <div className="share">
            <i className="fa-solid fa-share-nodes" onClick={handleShare}></i>
            <span>Share</span>
            </div>

            <div className="recive">
            <i className="fa-solid fa-download" onClick={handleRecive}></i>
            <span>Recive</span>
            </div>
        </div>
    </div>
   </>
  )
}

export default DashBoard
