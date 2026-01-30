import React from 'react'
import { useContext } from 'react';
import { WishlistContext } from '../WishListContext';

const Card = ({ product, addToCart }) => {
    const data = useContext(WishlistContext);
    const wish = data.wishList;
    const toggleWishList = data.toggleWishList;

    let isWished = false;

    for (let item of wish) {
    if (item.id === product.id) {
      isWished = true;
      break;
    }
  }

    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-3">
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-3">Price: ${product.price}</p>
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => addToCart(product)}>Add to cart</button>
            <button className="flex-1 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() =>toggleWishList(product)}>{isWished ? "Remove Wish" : "Add Wish"}</button>
          </div>
        </div>
      </div>
    )
}

export default Card
