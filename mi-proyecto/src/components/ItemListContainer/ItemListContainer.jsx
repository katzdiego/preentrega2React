import { useEffect, useState } from 'react';
import { getProducts } from '../../products';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al obtener los productos:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;