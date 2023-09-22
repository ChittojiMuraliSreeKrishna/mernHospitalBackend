const {loginController} = require('../controllers/login_controller');

module.exports = (router) => {
    router.get('/login/:userName?/:password?', loginController.login);
}