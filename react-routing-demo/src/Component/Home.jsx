import {useContext} from 'react'
import {ContextAuth} from '../Context/ContextAuth'
import {Navigate,useNavigate} from 'react-router-dom'

function Home (){
let navigate=useNavigate()
    let {handleAuth,isAuth}=useContext(ContextAuth)

    function handleLogin(){
        handleAuth()

        navigate('/products')

    }

    // if(isAuth){

    //     return <Navigate to='/products'/>

    // }

    return <div>

    <button  onClick={handleLogin} >Login</button>
    
    </div>
}

export default Home