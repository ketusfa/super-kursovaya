const Router = require('express')
const router = new Router()

router.post('/registration',)
router.post('/login',)

router.get('/auth', (req, res) => {
    res.json({message: "ee"})
})

module.exports = router;