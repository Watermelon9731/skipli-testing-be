import express from "express";
import { loginWithPhoneNumber } from "../services/login.service";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../configs/database";
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

router.post("/access-code", async (req, res) => {
  try {
    // await loginWithPhoneNumber(req.body.phoneNumber);

    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.post("/verify-access-code", (req, res) => {
  //   loginWithPhoneNumber(req.body.phoneNumber);

  res.send(users);
});

export default router;
