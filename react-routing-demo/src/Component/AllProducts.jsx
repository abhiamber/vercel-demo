import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {useSearchParams} from 'react-router-dom'




function AllProducts (){
  let [searchParams,setSeacrhParams]=useSearchParams()
  let initialVaue=searchParams.get("page")
  // console.log(initialVaue)

  if(typeof initialVaue!=='number'){
    initialVaue=Number(initialVaue)
  }

  if(!initialVaue || initialVaue <1  ){
    initialVaue=1
  }



  let [page,setPage]=useState(initialVaue)
  let[text,setText]=useState('')
console.log(text)

let [data,setData]=useState([])





  async  function getData(){

    let res= await fetch(`http://localhost:3000/posts?q=${text}&_page=${page}&_limit=2`)

    try{
        let data=await res.json()
        setData([...data])
        // console.log(data)
    }
    catch(err){
        console.log(err)
    }


    }


    useEffect(()=>{

        getData()

    },[page,text])

    useEffect(()=>{

setSeacrhParams({page,text})
  },[])

    

    return <div>
    <h3>All Products</h3>

    <input placeholder="seacrh"  value={text}  onChange={(e)=>setText(e.target.value)}  />

    <button  disabled={page===1} onClick={()=>setPage(page-1)} >Prev</button>
    <button>{page}</button>
    <button onClick={()=>setPage(page+1)} >Next</button>

    <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>More Deatails</th>
    </tr>
    </thead>
    {data.map(item=>{
        return  <tbody key={item.id}>
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td> <Link  to={`/products/${item.id}`} > More Deatails </Link></td>
        </tr>
        </tbody>
        
    })}
    
    
    </table>



    
    </div>
}

export default AllProducts