import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
const Item = ({ id, titulo, img, precio, descripcion }) => {
  const navigate = useNavigate();
  const clickComprar = (id) => {
    navigate('/item/' + id);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../" + img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}
        </Card.Text>
        <Card.Text>Precio:${precio}
        </Card.Text>
        <Button variant="primary" onClick={() => clickComprar(id)}>Ver Detalle</Button>
      </Card.Body>
    </Card>);

}

export default Item