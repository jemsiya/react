import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Review from './Review';


function Viewrest() {

  const urlParams=useParams()
  console.log(urlParams.id);
  
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

const viewrest=restaurntlist.find(item=>item.id==urlParams.id)
console.log(viewrest);

  return (

    
    <div>
{
  viewrest?(
    <Row className='m-4'>
    <Col md={3}>
      <Image src={viewrest.photograph} style={{height:'550px',width:'300px'}} fluid/>
    </Col>
    <Col md={8}>
    <h1> {viewrest.name} </h1>
    <ListGroup>
      <ListGroup.Item variant="dark">Id:{viewrest.id}</ListGroup.Item>
      <ListGroup.Item variant="dark" >Name:{viewrest.name}</ListGroup.Item>
      <ListGroup.Item variant="dark">Cuisine type:{viewrest.cusine_type}</ListGroup.Item>
      <ListGroup.Item variant="dark">Address:{viewrest.address}</ListGroup.Item>
      <ListGroup.Item variant="dark">neighborhood:{viewrest.neighborhood}</ListGroup.Item>
    </ListGroup>
<><Restop op={viewrest.operating_hours}/></>
<><Review review={viewrest.reviews}/></>
    </Col>
  </Row>

  ):'null'
}

    </div>
  )
}

export default Viewrest