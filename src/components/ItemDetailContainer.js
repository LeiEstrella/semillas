import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    //Este id proviene de la url
    const { id } = useParams()

    useEffect(() => {

        const docRef = doc(db, '1234', id)

        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            console.log("doc.data ", doc.data())
            console.log("productFormatted " , productFormatted)
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductById(id).then(response => {
        //     setProduct(response)
        // })
    }, [id])

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer