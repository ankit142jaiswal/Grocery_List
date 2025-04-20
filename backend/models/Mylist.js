const mongoose = require('mongoose')

const MyListSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true
    },
    order:{
        type: Array,
        required: true,
        default:[],
    },
    date:{
        type : Date,
        default: Date.now
    }

})
module.exports = mongoose.model('MyList',MyListSchema);