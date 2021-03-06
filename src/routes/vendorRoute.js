const express = require('express')

const vendorController = require('../controllers/vendorController')
const authorize = require('../../utils/authorize')

const router = express.Router()

// router.post('/vendor/register', vendorController.register)
// router.post('/vendor/login', vendorController.login)
router.get('/vendor/view-profile', authorize('vendor'), vendorController.viewProfile)
router.patch('/vendor/edit-profile', authorize('vendor'), vendorController.editProfile)

module.exports = router
