const router = require('express').Router()
const eventControllers = require('../controllers/eventControllers')

router.get('/', eventControllers.getAll)
router.post('/', eventControllers.add)

module.exports = router