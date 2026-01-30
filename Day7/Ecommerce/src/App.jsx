import Product from './components/Products'
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WishList from '../src/components/WishList'
import Cart from './components/Cart'
import useCart from './customHooks/useCart';

function App() {
  const cartData = useCart();

  return (
    <>
      <Header cartData={cartData} />
      <Routes>
        <Route path='/' element={<Product cardData={cartData} />} />
        <Route path='wish' element={<WishList />} />
        <Route path='cart' element={<Cart cartData={cartData} />} />
      </Routes>
    </>
  )
}

export default App
