import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { firebaseApp } from "../configs/database";

const firebaseAuth = getAuth(firebaseApp);
firebaseAuth.useDeviceLanguage();

export const loginWithPhoneNumber = async (phoneNumber: string) => {
  const appVerifier = new RecaptchaVerifier(
    firebaseAuth,
    "recaptcha-container",
    {}
  );
  try {
    const confirmationResult = await signInWithPhoneNumber(
      firebaseAuth,
      phoneNumber,
      appVerifier
    );
    console.log(confirmationResult);
  } catch (error) {
    console.log(error);
  }
};
