const express = require('express')
const router = express.Router()

router.post('/item_list',(req,resp)=>{
    try{
        // console.log([ global.items_list, global.category_list, global.order_list])
        resp.send([global.items_list, global.category_list, global.order_list])

    }catch(error){
        console.error(error.message);
        resp.send("Server Error")
    }
})

module.exports = router;