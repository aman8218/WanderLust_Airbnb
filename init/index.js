const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main().then((res)=>{
    console.log("database is connected");
}).catch(err=>{console.log(err)});

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner: "65fd1af2576d39d0974a2c2f"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();