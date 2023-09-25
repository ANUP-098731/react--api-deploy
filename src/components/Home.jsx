import React,{useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
import Cardapi from './common/Card'
import { Link } from 'react-router-dom'


const Home = () => {
    const[users,setUsers]= useState([])
    console.log(users)
    function categorydata(){
        axios
        .get('https://fakestoreapi.com/products/categories')
        .then(function(response){
            setUsers(response.data)
        })
        .catch (function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        categorydata();
    },[])
  return (
    <div>
        <h1>categories</h1>
       {users.length > 0 ? (
         <Row>
         {
             users &&
             users.map((user,ind)=>{
                 return(
                     <Col key={ind}>
                         <Link to={'/CategoryProduct/'+user}>
                         <Cardapi category={user}/>
                         </Link>
                     
                     </Col>
                 )
             })
             
         }
         
     </Row>
       ):(
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
       )}
        
    </div>
  )
}

export default Home