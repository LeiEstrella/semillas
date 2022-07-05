import React, { useEffect } from 'react';
import { useState, useContext } from 'react'
import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import CartContext from './Context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ titulo, cantidad, img, descripcion, precio }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    cantidad = quantity
    addItem(titulo)
  }

  useEffect(() => {
     console.log("producto: " , titulo)

  }, [])


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../" + img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}
        </Card.Text>
        <Card.Text>Precio:${precio}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
      {quantityAdded === 0
        ? <ItemCount stock={cantidad} onAdd={handleOnAdd} />
        : <Link to='/cart'>Terminar compra</Link>
      }
    </Card>);

}

export default ItemDetail