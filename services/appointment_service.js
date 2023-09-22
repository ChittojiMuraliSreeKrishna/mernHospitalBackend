const {connectDB} = require('../database/connections/mongodb');
const appointmentDetails = require('../database/modals/appointment_modal');
//Connect to MongoDB
connectDB();
const appointmentService = {
    saveAppointment: async(payload) => {
        try{
            const {time,date} = payload;
            //Create Appointment
            const new_appointment = new appointmentDetails({
                date,
                time
            });
            const check = await new_appointment.save();
               return check;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = {appointmentService}
