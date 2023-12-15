const express = require("express");

// objek router
const router = express.Router();

// impor student controller
const StudentController = require("../controller/StudentController");

// bikin route nya
router.get("/", (req, res) => {
    res.send("Hello Express");
});

// route students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export
module.exports = router;