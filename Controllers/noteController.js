const Notes = require("../models/noteModel");

const addNote = async (req, res) => {
  const note = Notes.create({
    title: req.body.title,
    details: req.body.details,
  });
  res.status(200).send(note);
};

const getNotes = async (req, res) => {
  const notes = await Notes.findAll();
  // console.log(notes);
  res.status(200).send(notes);
};

const getSingleNote = async (req, res) => {
  const note = await Notes.findOne({
    where: { id: 2 },
  });
  res.status(200).send(note);
};

const removeNote = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const note = await Notes.destroy({
      where: {id: id}
  })
  res.status(200).send("Product Deleted");
};

const updateNote = async (req, res) => {
    const {id} = req.params;
    console.log(req.body);
    const note = await Notes.update(req.body, {
        where: {id: id}
    })
    res.status(200).send(`No:${id} note is updated`);
}

module.exports = { addNote, getNotes, getSingleNote, removeNote, updateNote };
