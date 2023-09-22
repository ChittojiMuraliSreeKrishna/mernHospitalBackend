const {loginService} = require('../services/login_service');

const loginController = {
    login: async(req, res) => {
        try {
            const {params} = req;
            const loginRes = await loginService.login(params);
            res.json(loginRes);
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = {
    loginController
}