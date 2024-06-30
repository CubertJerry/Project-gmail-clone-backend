const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/send', authMiddleware, emailController.sendEmail);
router.get('/', authMiddleware, emailController.getEmails);

module.exports = router;