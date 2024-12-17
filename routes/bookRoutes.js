const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, bookController.createBook);
router.get('/', authMiddleware, bookController.getAllBooks);
router.put('/:id', authMiddleware, bookController.updateBook);
// router.delete('/:id', authMiddleware, bookController.deleteBook);
router.delete('/deleteAll', bookController.deleteAllBook);

module.exports = router;
