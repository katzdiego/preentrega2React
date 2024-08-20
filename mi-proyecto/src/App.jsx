import react from 'react'
import './App.css'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
      <div>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'}/>
      </div>
  )
}

export default App
