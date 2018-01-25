const router = require('express').Router()
const bookingControllers = require('../controllers/bookingControllers')

router.get('/', bookingControllers.getAll)
router.post('/', bookingControllers.add)
router.put('/:id', bookingControllers.update)
router.delete('/:id', bookingControllers.remove)

module.exports = router