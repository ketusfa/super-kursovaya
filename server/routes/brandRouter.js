const Router = require('express')
const brandController = require('../controllers/brandController')
const router = new Router()


router.post('/', brandController.create)
router.delete('/', brandController.delete)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)

module.exports = router