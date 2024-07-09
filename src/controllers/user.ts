import express from "express";
import { FIND_USER, GITHUB_BASE_URL } from "../utils/url";

const router = express.Router();

const users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
];

router.get("/search-user", async (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.get("/search-user-id", async (req, res) => {
  const { id } = req.query;
  try {
    const data = await fetch(GITHUB_BASE_URL + FIND_USER);
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.get("/profile", async (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.post("/liked-profile", async (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

export default router;
