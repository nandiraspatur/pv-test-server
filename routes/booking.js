const router = require('express').Router()
const bookingControllers = require('../controllers/bookingControllers')

router.get('/', bookingControllers.getAll)
router.post('/', bookingControllers.add)

module.exports = router