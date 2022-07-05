import React from 'react';
import Item from './Item';



const ItemList = ({ productos, tipo }) => {


    return (

        <ul style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {productos.map(prod =>
                prod.origen == tipo || tipo == undefined ?
                    <Item key={prod.id} {...prod}/>
                    :
                    <div key={prod.id} ></div>
            )}
        </ul>
    )
}


export default ItemList