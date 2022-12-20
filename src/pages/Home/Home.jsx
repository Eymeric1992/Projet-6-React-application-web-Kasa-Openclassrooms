import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import ShoppingList from '../../components/ShoppingList'
import ImageHome from '../../components/ImageHome'
//import Survey from './Survey'
//import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
        <Banner />
 
        <ImageHome />
        <ShoppingList /><div>
          <form onSubmit={handleSubmit}>
            <input type='text' name='my_input' defaultValue='Tapez votre texte' />
            <button type='submit'>Entrer</button>
          </form></div>
        <Cart />
    
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