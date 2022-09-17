import {useContext} from 'react'
import {ContextAuth} from '../Context/ContextAuth'
import {Navigate} from 'react-router-dom'

function PrivateRoute({children}){
let {isAuth}=useContext(ContextAuth)

// console.log(isAuth)

if(!isAuth){

    return <Navigate to='/'/>
}  

    return children
}

export default PrivateRoute