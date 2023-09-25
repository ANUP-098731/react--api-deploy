import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CardProduct } from './common/Card';

const CategoryProduct = () => {
  const { user } = useParams();
  console.log(`category-product ${user}`)
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/${user}`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch products for the selected category when the component first loads
    fetchData();
  }, []);

  const handleBackClick = () => {
    // Fetch categories when navigating back to the "Home" page
    fetchData(user);
  };

  return (
    <div>
      <h1>Category: {user}</h1>
      {products.length > 0 ? (
        <Row>
          {products.map((product, ind) => {
            return (
              <Col key={ind}>
                <CardProduct allproduct={product} />
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <Link to={'/Home'}>
        <button className='btn btn-primary' onClick={handleBackClick}>Back</button>
      </Link>
    </div>
  );
};

export default CategoryProduct;
