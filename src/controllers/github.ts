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

router.post("/search-user-id", async (req, res) => {
  try {
    const data = await fetch(
      GITHUB_BASE_URL + FIND_USER + `${req.body.userId}`
    );
    const result = await data.json();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
