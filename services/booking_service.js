const {connectDB} = require('../database/connections/mongodb');
const bookingDetails = require('../database/modals/bookings_modal');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME;
//Connect to MongoDB
connectDB();
const bookingService = {
    saveBooking: async (payload) => {
        try {
            const{firstName,lastName,
                mobileNumber,
                type,
                address,
                consultantDoctor,
                consulteeId,
                timeStamp} = payload;
                //Create booking
                const new_booking = new bookingDetails({
                firstName,
                lastName,
                mobileNumber,
                type,
                address,
                consultantDoctor,
                consulteeId,
                timeStamp
                });
                new_booking.timeStamp = new Date().toISOString();
                const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
                await client.connect();
                 const database = client.db(dbName);
                const collection = database.collection('consultees');
                const collectionSize  = (await collection.countDocuments())+1;
                new_booking.consulteeId = "BHA"+collectionSize;
               const check = await new_booking.save();
               return check;

        } catch(error) {
            console.log(error);
        }
    },

    getBookings: async () => {
        try {
            // Find All Users
            const allBookings = await bookingDetails.find();
            return allBookings
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = {
    bookingService
}