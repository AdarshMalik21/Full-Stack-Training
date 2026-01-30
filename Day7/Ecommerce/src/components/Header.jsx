import {useContext} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { WishlistContext } from '../WishListContext'

const Header = ({ cartData }) => {
  const {wishList = []} = useContext(WishlistContext)
  const cartCount = cartData?.cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to = "/">
        <div className="text-2xl font-bold text-gray-800">Ecommerce</div>
        </Link>
        <div className="flex items-center space-x-3">
          <div>
            Cart ({cartCount})
          </div>
          <NavLink to = '/cart' className = {({isactive}) => isactive?"text-red-400":"text-black"}>
          <button className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600">Cart</button>
          </NavLink>
          <NavLink to = '/wish' className = {({isactive}) => isactive?"text-red-400":"text-black"}>
          <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">Wish ({wishList.length})</button>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
