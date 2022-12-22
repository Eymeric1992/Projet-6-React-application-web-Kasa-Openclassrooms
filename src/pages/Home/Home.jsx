import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import ShoppingList from '../../components/ShoppingList'
import ImageHome from '../../components/ImageHome'
//import Survey from './Survey'
//import { Routes, Route } from "react-router-dom"
import '../../styles/App.css'
function App() {
  return (
    <div className='App'>
      <Banner />
      <ImageHome />
      <ShoppingList />
      <Footer />
    </div>
   
  )
}
function handleSubmit(e) {
  e.preventDefault()
  alert(e.target['my_input'].value)
}

export default App

/* EXEMPLE ROUTING
<Routes>
<Route path="/" element={<Index />} />
<Route path="/" element={<Survey />} />
</Routes>*/