// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { ItemListContaines } from './components/ItemListContainer/ItemListContaines'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegador } from './components/Navegador/Navegador';

function App() {

  return (
    <>
      <div>
        <Navegador />
        <ItemListContaines greeting='saludo app'/>
      </div>

    </>
  )
}

export default App
