const mongoose = require('mongoose');
const mongoURI = 'mongodb://groofers:fRm1tuUwpaejYjxD@cluster1-shard-00-00.tsakd.mongodb.net:27017,cluster1-shard-00-01.tsakd.mongodb.net:27017,cluster1-shard-00-02.tsakd.mongodb.net:27017/groofers?ssl=true&replicaSet=atlas-hxpgmk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1'

async function dbConnect() {
    await mongoose.connect(mongoURI).then(async()=>{
        console.log("Connected SuccessFully !!");
        const items_list = await mongoose.connection.db.collection('items_list');        
        await items_list.find({}).toArray().then(
            async (data , err)=>{
                const category_list = await mongoose.connection.db.collection('category_list');
                await category_list.find({}).toArray().then(async (catData, err)=>{
                    if (err){
                        console.log(err); 
                    }else{
                        global.items_list = data;
                        global.category_list = catData;
                        // console.log(global.items_list)
                        // console.log( global.category_list)

                    }
                });

            // if (err){
            //     console.log("---",err)
            // }else{
            //     global.items_list = data;
            //     console.log()
            // }
     } )
       
     
        
        
       
    }).catch((err)=>{
        console.log("---",err);
    });

    
}

module.exports = dbConnect();