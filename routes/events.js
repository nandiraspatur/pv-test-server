const router = require('express').Router()
const eventControllers = require('../controllers/eventControllers')

router.get('/', eventControllers.getAll)
router.get('/:id', eventControllers.getOne)
router.post('/', eventControllers.add)

module.exports = router