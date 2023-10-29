// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContaines } from './components/ItemListContainer/ItemListContaines'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <ItemListContaines greeting='saludo app'/>
      </div>

    </>
  )
}

export default App
