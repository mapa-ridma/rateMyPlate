import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function CardComponent(props) {
  return (

<div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>

<Card className="card" style={{ width: '50%', border: 'solid' }}>
      <Card.Img variant="top" src="" />
      {/* {props.Img.src} */}
      <Card.Body>
        <Card.Title id="card-title">Username: {props.Title}</Card.Title>
        <Card.Text id="card-comment">
          Comment: {props.Text}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>


</Card>



</div>

  
  )
}

export default CardComponent