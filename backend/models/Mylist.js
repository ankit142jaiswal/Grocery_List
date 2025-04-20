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
    },
    date:{
        type : Date,
        default: Date.nowgit 
    }

})
module.exports = mongoose.model('MyList',MyListSchema);