// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContaines } from './components/ItemListContainer/ItemListContaines'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContaines greeting='saludo app'/>
      </div>

    </>
  )
}

export default App
