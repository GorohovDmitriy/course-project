const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/get', (req, res) => {
	db.query("SELECT * FROM categoryes", (err, result) => {
		res.send(result)
	})
})

module.exports = router