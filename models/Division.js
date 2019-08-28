const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create division schema
const DivisionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    description:{
        type: String,
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
    //add geolocation
})

//Division = name of model, division = name of collection in mongodb, mongodb will automatically pluralize division
const Division = mongoose.model('division', DivisionSchema);
module.exports = Division;