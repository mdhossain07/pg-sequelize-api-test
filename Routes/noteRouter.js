const noteController = require('../Controllers/noteController');

const router = require('express').Router();

router.post('/add-note', noteController.addNote);
router.get("/notes", noteController.getNotes);
router.get("/single-note", noteController.getSingleNote);
router.delete("/delete/:id", noteController.removeNote);
router.put("/update/:id", noteController.updateNote);

module.exports= router;