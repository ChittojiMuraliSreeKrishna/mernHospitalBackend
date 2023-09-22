const {connectDB} = require('../database/connections/mongodb');
const {adminModal} = require('../database/modals/admin_modal');

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

//Connection to the Database
connectDB();
const loginService = {
    login: async(params, res) => {
        try{
            console.log(params);
            const {
                userName,
                password
            } = params;
            const checkUser = adminModal.find({
                userName,
                password
            });
            if(checkUser) {
                console.log(checkUser);
                const token = generateToken(user);
                res.json({ token });
            }
        } catch(error) {

        }
    }
}

module.exports = {
    loginService
}