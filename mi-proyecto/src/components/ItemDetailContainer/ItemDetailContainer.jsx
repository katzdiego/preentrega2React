import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error("Error al obtener el producto:", error);
            });
    }, [id]);

    return (
        <div className='ItemDetailContainer'>
            {product ? (
                <ItemDetail {...product} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
