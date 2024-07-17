import express from "express";
import {
  addFavoriteProfile,
  getFavoriteProfiles,
  getUserProfile,
  removeFavoriteProfile,
} from "../services/user.service";
import { EntityFavorite } from "../entities/favorite.entity";
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
    const result = await addFavoriteProfile(
      req.body.favoriteId,
      req.body.payload
    );
    if (!result) return res.send({ message: "Fail to add" });
    res.send({ message: "Added", data: result });
  } catch (error) {
    res.send(error);
  }
});

router.post("/liked-remove", async (req, res) => {
  try {
    const result = await removeFavoriteProfile(
      req.body.favoriteId,
      req.body.payload
    );
    if (!result) return res.send({ message: "Fail to remove" });
    res.send({ message: "Removed", data: result });
  } catch (error) {
    res.send(error);
  }
});

router.post("/profile", async (req, res) => {
  try {
    const result = await getUserProfile(req.body.userId);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
