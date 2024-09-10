import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantyAdded, setQuantyAdded] = useState(0);

    const handleAdd = (quantity) => {
        setQuantyAdded(quantity);
        console.log('Cantidad agregada:', quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Info">Precio: ${price}</p>
                {quantyAdded > 0 && <p className="Info">Cantidad agregada: {quantyAdded}</p>}
            </section>
            <footer className="ItemFooter">
                {quantyAdded === 0 ? (
                    <ItemCount 
                        initial={1} 
                        stock={stock} 
                        onAdd={handleAdd}
                    />
                ) : (
                    <Link to="/cart" className="Option">
                        Ir al carrito
                    </Link>
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;