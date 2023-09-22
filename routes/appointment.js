const {appointmentController} = require('../controllers/appointment_controller');

module.exports = (router) => {
    router.post('/createAppointment', appointmentController.saveAppointmentDetails);
}