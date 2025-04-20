const mongoose = require('mongoose');
const mongoURI = 'mongodb://groofers:fRm1tuUwpaejYjxD@cluster1-shard-00-00.tsakd.mongodb.net:27017,cluster1-shard-00-01.tsakd.mongodb.net:27017,cluster1-shard-00-02.tsakd.mongodb.net:27017/groofers?ssl=true&replicaSet=atlas-hxpgmk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1'

async function dbConnect() {
    await mongoose.connect(mongoURI).then(async()=>{
        console.log("Connected SuccessFully !!");

        const items_list = await mongoose.connection.db.collection('items_list');        
        await items_list.find({}).toArray().then(
            async (item_data , err)=>{
                if (err){
                    console.log(err); 
                }else{
                    global.items_list = item_data;
                    // console.log(global.items_list)
                }
            }
        )
        
        const category_list = await mongoose.connection.db.collection('category_list');
        await category_list.find({}).toArray().then(
            async (category_data, err)=>{
                if (err){
                    console.log(err); 
                }else{
                    global.category_list = category_data;
                    // console.log( global.category_list)
                    
                }
            }
        )
        
        const order_list = await mongoose.connection.db.collection('mylists');
        await order_list.find({}).toArray().then(
            async (order_data ,err)=>{
                if (err){
                    console.log(err); 
                }else{
                    global.order_list = order_data;
                    // console.log(global.order_list)
                }
            }
        )
    })


}

module.exports = dbConnect();