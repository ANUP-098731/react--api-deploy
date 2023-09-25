import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap'
import { CardProduct } from './common/Card';

const Allproducts = () => {
  const[products,setProducts]=useState([])
  function productdata(){
    axios
    .get('https://fakestoreapi.com/products')
    .then(function(response){
      console.log(response)
      setProducts(response.data)
    })
    .catch(function(error){
      console.log('error',error)
    })
  }
  useEffect(()=>{
    productdata();
  })
  return (
    <div>
      <h1>Allproducts</h1>
      {products.length > 0 ?(
         <Row>
         {
           products && 
           products.map((product,ind)=>{
             return(
               <Col key={ind}>
               <CardProduct allproduct={product}/>
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

export default Allproducts