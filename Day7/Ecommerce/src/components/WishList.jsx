import { useContext } from "react";
import { WishlistContext } from "../WishListContext";

export default function WishList(){
    const { wishList = [] } = useContext(WishlistContext);
    return(
        <div>
            <h2>My Wishlist</h2>
            {wishList.length === 0 ? (<p>No item</p>) : (wishList.map((item) => (<p key={item.id}>{item.name}</p>)))}
        </div>
    )
}