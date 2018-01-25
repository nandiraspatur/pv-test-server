const router = require('express').Router()
const eventControllers = require('../controllers/eventControllers')

router.get('/', eventControllers.getAll)
router.post('/', eventControllers.add)
router.put('/:id', eventControllers.update)
router.delete('/:id', eventControllers.remove)

module.exports = router