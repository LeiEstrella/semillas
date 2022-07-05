import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";

const ItemCount = ({ stock }) => {
    let [valor, setValor] = useState(1)
    const onAdd = () => {
        if (valor < stock) {
            setValor(valor + 1)
        }
    }
    const onSubstract = () => {
        if (valor > 0) {
            setValor(valor - 1)
        }
    }


    return (
        <Card.Text>
            <span>Cantidad: {valor + " "}</span>
            <Button onClick={() => onAdd()}>+</Button> &nbsp;
            <Button onClick={() => onSubstract()}>-</Button>
            <br />
            <div>
                <button className="Button" onClick={() => onAdd(valor)}>Agregar al carrito</button>
            </div>
        </Card.Text>);

}

export default ItemCount