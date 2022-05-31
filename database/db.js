const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(
            'mongodb+srv://induwara:123@rocelldb.r36ws.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://induwara:123@rocelldb.r36ws.mongodb.net/?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('Database Connection Success');
    } catch (err) {
        console.log(err);
    }
};