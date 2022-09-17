import { createContext, useState } from "react";

 export let ContextAuth=createContext()


function ContextProvider({children}){

    let [isAuth,setIsAuth]=useState(true)

    function handleAuth(){

        setIsAuth(!isAuth)
    }


    return  <ContextAuth.Provider  value={{isAuth,handleAuth}} >
    
    {children}
    
    </ContextAuth.Provider>
}

export default ContextProvider


