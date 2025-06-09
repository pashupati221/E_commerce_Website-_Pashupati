const mongoose = require("mongoose");

uri =  
"mongodb+srv://pashupatichoubey8:PashupatiMongodb@123@pashupati.40s7vtd.mongodb.net/?retryWrites=true&w=majority&appName=PashuPati";




const connectDB = () => {  
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports = connectDB;