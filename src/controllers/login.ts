import express from "express";
import { loginWithPhoneNumber, verifyOTP } from "../services/login.service";
const router = express.Router();

router.post("/access-code", async (req, res) => {
  try {
    const result = await loginWithPhoneNumber(req.body.phoneNumber);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/verify-access-code", async (req, res) => {
  try {
    const result = await verifyOTP(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
