

import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [roomId, setRoomId] = useState();
    const [value , setValue] = useState();
    const [isConnected, setIsConnected] = useState(false);

    const handleonClick = ()=>{
         let Id = Math.floor(100000 + Math.random() * 900000);
         setRoomId(Id);
    }

    const onchange = (e)=>{
        setValue(...[e.target.value])
     }

    const handleConnect = () =>{
       if(value === roomId){
        setIsConnected(true);
        console.log("connected")
       }
    }

    return (
        <AppContext.Provider value={{roomId,handleonClick, onchange, value, handleConnect, isConnected}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider};