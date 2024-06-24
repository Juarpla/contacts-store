const router = require("express").Router();
const contactRoutes = require("./contactRoutes");

router.get("/", (req, res) => {
  //#swagger.tags=["Welcome"]
  res.send("Welcome to Juan Plasencia's Contacts Project");
});
router.use("/contacts", contactRoutes);

module.exports = router;