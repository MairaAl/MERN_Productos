const PersonController = require("../controllers/person.controller");

module.exports = (app) => {
  app.get("/api/persons/", PersonController.findAllPersons);
  app.get("/api/persons/:id", PersonController.findOneSinglePerson);
  app.put("/api/persons/update/:id", PersonController.updateExistingPerson);
  app.post("/api/persons/new", PersonController.createNewPerson);
  app.delete(
    "/api/persons/delete/:id",
    PersonController.deleteAnExistingPerson
  );
};
