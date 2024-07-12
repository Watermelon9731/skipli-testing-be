import express from "express";
import {
  addFavoriteProfile,
  getFavoriteProfiles,
} from "../services/user.service";
const router = express.Router();

router.post("/favorite", async (req, res) => {
  try {
    const result = await getFavoriteProfiles(req.body.userId);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/liked", async (req, res) => {
  try {
    await addFavoriteProfile(req.body.favoriteId, req.body.payload);
    res.send({ message: "Successfully", data: req.body.payload });
  } catch (error) {
    res.send(error);
  }
});

export default router;
