import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardapi({category}) {
    // console.log("category",category)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <h3>Category: <br/> {category}</h3>
      </Card.Body>
    </Card>
  );
}



 export function CardProduct({allproduct}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" className='img-fluid' src={allproduct.image} />
      <Card.Body>
        <Card.Title>title:{allproduct.title}</Card.Title>
        <p>catgeory:{allproduct.category}</p>
        <Card.Text>
          description: {allproduct.description}
        </Card.Text>
        <h6> Price:{allproduct.price}</h6>
      </Card.Body>
    </Card>
  );
}



export default Cardapi;