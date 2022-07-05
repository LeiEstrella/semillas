import React, { useEffect, useState } from 'react';
// import getProducto from './BaseDatos/base';
import ItemList from './ItemList';
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services/'

const ItemListContainer = ({ param }) => {
  const [productos, setProductos] = useState([])
  let { tipoSemilla } = useParams();

  useEffect(() => {
    // getProducto().then(response => {
    //   setProductos(response);

    // })
    const collectionRef = collection(db, '1234')

    getDocs(collectionRef).then(response => {
        const productsFormatted = response.docs.map(doc => {
            console.log("doc: " + JSON.stringify(doc.data()))
            return { id: doc.id, ...doc.data() }
        })
        setProductos(productsFormatted)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        //setLoading(false)
    })
  }, [])

  return (
    <div>
      <section>
        <h1 className="titulo">Bienvenido a Semillas</h1>
        <Container fluid>
          <ItemList productos={productos} tipo={tipoSemilla} />
        </Container>

      </section>
    </div>
  );
};

export default ItemListContainer;


