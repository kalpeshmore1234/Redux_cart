import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import CartPage from "./components/CartPage"
import './App.css'


function App() {
  return (
    <BrowserRouter>
       <Navbar />
        <Routes>
           <Route path="/"  element={<ProductCard />} />
           <Route path="/cartpage"  element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App