import express from "express";
import { FIND_USER, GITHUB_BASE_URL, SEARCH_USER } from "../utils/url";
import { URLSearchParams } from "url";
import { stringifyQueryParams } from "../utils/helpers/url";

const router = express.Router();

router.get("/search-user", async (req, res) => {
  const { query } = req;
  if (!query) return;
  const url = new URL(GITHUB_BASE_URL + SEARCH_USER);
  const searchParams = stringifyQueryParams(query);
  url.search = new URLSearchParams(searchParams).toString();
  try {
    const result = await fetch(url);
    const parseResult = await result.json();
    res.send(parseResult);
  } catch (error) {
    res.send(error);
  }
});

router.get("/search-user-id", async (req, res) => {
  const { id } = req.query;
  try {
    const data = await fetch(GITHUB_BASE_URL + FIND_USER);
    res.send();
  } catch (error) {
    res.send(error);
  }
});

router.get("/profile", async (req, res) => {
  try {
    res.send();
  } catch (error) {
    res.send(error);
  }
});

router.post("/liked-profile", async (req, res) => {
  try {
    res.send();
  } catch (error) {
    res.send(error);
  }
});

export default router;
