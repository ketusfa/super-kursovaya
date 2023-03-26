const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const UserController = require('../controllers/userController')

<<<<<<< HEAD
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
=======
router.post('/registration',)
router.post('/login',)

router.get('/auth', (req, res) => {
    res.json({message: "ee"})
})
>>>>>>> 09dabb157ac754abc57cd8b7668696f493a4e7c4

module.exports = router;