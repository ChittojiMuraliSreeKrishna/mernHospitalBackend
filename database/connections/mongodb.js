const {db_url,db_name} = require('../../config/index');
const { default: mongoose } = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${db_url}/${db_name}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB', `${db_url}/${db_name}`);
    } catch(error) {
        console.log(error);     
    }
}

module.exports = {
    connectDB
}