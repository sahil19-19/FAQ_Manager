const express = require('express');
const router = express.Router();
// const {get_faqs, create_faq, delete_faq} = require('../controllers')
const create_faq = require('../controllers/createFaq');

// router.get('/',get_faqs);

router.post('/',create_faq);

// router.delete('./:id',delete_faq);

module.exports = router;