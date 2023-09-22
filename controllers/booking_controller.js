const {bookingService} = require('../services/booking_service');

const bookingController = {
    bookingDetails: async (req, res) => {
        try {
            const {body} = req;
            const bookingRes = await bookingService.saveBooking(body);
            res.json(bookingRes)
        } catch(error) {
            console.log(error);
            res.status(500).json("Internal server error");
        }
    },

    getBookingDetails: async (req, res) => {
        try {
            const bookingDetails = await bookingService.getBookings();
            res.json(bookingDetails);  
        } catch(error) {
            console.log(error)
        }
    }
}

module.exports = {
    bookingController
}