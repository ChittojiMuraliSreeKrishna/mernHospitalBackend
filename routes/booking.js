const {bookingController} = require('../controllers/booking_controller');

module.exports = (router) => {
    router.post('/createBooking', bookingController.bookingDetails);
    router.get('/getBookings',bookingController.getBookingDetails);
}