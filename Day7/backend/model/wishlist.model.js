import mongoose from "mongoose";

const wishlistSchema = new mongoose.connect({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

export const Wishlist = mongoose.model("Wishlist", wishlistSchema)