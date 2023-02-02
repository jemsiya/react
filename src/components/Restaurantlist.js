import React,{ useEffect } from 'react'
import {useState} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';


function Restaurantlist() {
    const [restaurntlist,setRestaurantlist]=useState([])

    const getRestaurant=async()=>{
        await fetch('/restaurants.json')
        .then((data)=>data.json()
        .then((result)=>setRestaurantlist(result.restaurants)))
      
    }
    console.log(restaurntlist);
    useEffect(() => {
        getRestaurant()
    
     
    }, [])

   
    
  return (

   
     <Row>
     {
   
     restaurntlist.map(item=>(
   <Restcard restaurant={item}/> 
  /* <h1>{item.name}</h1>*/
 )) 

     }
      
 
     
     </Row>
  )
}

export default Restaurantlist