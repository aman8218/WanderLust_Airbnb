const mongoose = require("mongoose");
const Review=require("./review.js");
const User = require("./user.js");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String
    },
    image: {
        filename: {
            type: String
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set: (v)=>v==="" ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v
        }
        
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing)
    {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
})

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;