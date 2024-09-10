import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';  // Importar ItemDetailContainer

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />

          <Route path="/products" element={<ItemListContainer greeting={'Lista de productos'} />} />

          <Route path="/counter" element={
            <ItemCount 
              initial={1} 
              stock={10} 
              onAdd={(quantity) => console.log('Cantidad agregada', quantity)} 
            />
          } />

          <Route path="/product/:productId" element={<ItemDetailContainer />} />

          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
