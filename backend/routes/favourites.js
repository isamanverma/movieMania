const router = require("express").Router();
const Favourite = require("../models/Favourite");

router.get("/", async (req, res) => {
  try {
    const favourites = await Favourite.find();
    res.json(favourites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const favourite = new Favourite(req.body);
  try {
    const newFavourite = await favourite.save();
    res.status(201).json(newFavourite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Favourite.findOneAndDelete({ movieId: req.params.id });
    res.json({ message: "Favourite deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
