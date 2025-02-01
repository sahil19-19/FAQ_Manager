const express = require('express');
const router = express.Router();
// const {get_faqs, create_faq, delete_faq} = require('../controllers')
const create_faq = require('../controllers/createFaq');
const delete_faq = require('../controllers/deleteFaq');
const get_faq = require('../controllers/getFaq');
const get_id = require('../middleware/getId')

router.get('/',get_faq);

router.post('/',create_faq);

router.delete('/:id', get_id, delete_faq);

module.exports = router;