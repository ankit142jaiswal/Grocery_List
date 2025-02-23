const mongoose = require('mongoose')

const MyListSchema = new mongoose.Schema({
    // email : {
    //     type : String,
    //     // required : true,
    //     unique : true
    // },
    order:{
        type: Array,
        required: true,
        default:[],
    }

})
module.exports = mongoose.model('MyList',MyListSchema);