const {appointmentService} = require('../services/appointment_service');

const appointmentController ={
    saveAppointmentDetails: async(req, res) =>{
        try{
            const {body} = req;
            const appointmentRes = await appointmentService.saveAppointment(body);
            res.json(appointmentRes);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = {
    appointmentController
}