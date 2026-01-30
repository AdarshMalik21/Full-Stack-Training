import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({children}){

    const [wishList, setwishList] = useState([]);

    const toggleWishList = (product) =>{
        const exist = wishList.find(item => item.id === product.id);

        if(exist){
            setwishList(wishList.filter(item => item.id !== product.id));
        }
        else{
            setwishList([...wishList,product]);
        }
    };
    return(
        <WishlistContext.Provider value={{wishList, toggleWishList}}>
            {children}
        </WishlistContext.Provider>
    )
}