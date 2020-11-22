const express = require("express");
const router = express.Router();
const Contact = require("../api/models/contact");

router.get("/test", (req, res) => {
  res.send("Contact is Working");
});
router.post("/", (req, res) => {
  const pontact = new Contact({
    name: req.body.name,
    email: req.body.email,
    companyName: req.body.companyName,
    subject: req.body.subject,
    message: req.body.message,
    createdDate: new Date(),
  });
  pontact
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /api/v.1/contact",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.get("/", (req, res) => {
  Contact.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
module.exports = router;
