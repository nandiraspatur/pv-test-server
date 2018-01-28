const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h3>Booking System API - NandiraSPatur</h3>')
})

module.exports = router;