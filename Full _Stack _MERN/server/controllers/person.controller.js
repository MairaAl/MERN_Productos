const person = require("../models/person.model");

module.exports.findAllPersons = (req, res) => {
  person
    .find()
    .then((allDaPersons) => res.json({ persons: allDaPersons }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePerson = (req, res) => {
  person
    .findOne({ _id: req.params.id })
    .then((oneSinglePerson) => res.json({ person: oneSinglePerson }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPerson = (req, res) => {
  person
    .create(req.body)
    .then((newlyCreatedPerson) => res.json({ person: newlyCreatedPerson }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPerson = (req, res) => {
  person
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPerson) => res.json({ person: updatedPerson }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPerson = (req, res) => {
  person
    .deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
