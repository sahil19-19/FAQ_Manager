const express = require('express');
const router = express.Router();
const create_faq = require('../controllers/createFaq');
const delete_faq = require('../controllers/deleteFaq');
const get_faq = require('../controllers/getFaq');
const get_one_faq = require('../controllers/getOneFaq');
const get_id = require('../middleware/getId');

// to get the list of all FAQS
router.get('/',get_faq);

router.get('/:id',get_id, get_one_faq);

router.post('/',create_faq);

router.delete('/:id', get_id, delete_faq);

module.exports = router;