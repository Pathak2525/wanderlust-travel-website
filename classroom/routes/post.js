const express = require("express");
const router = express.Router();

//////////////Post

//Index Post Route
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//SShow Post Route
router.get("/:id", (req, res) => {
    res.send("GET for posts id");
});

//Post Post Route
router.post("/", (req, res) => {
    res.send("POST for posts ");
});


// DELETE Post Route
router.delete("/:id", (req, res) => {
    res.send("DELETE for posts id");
});

module.exports = router;