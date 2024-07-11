import {
  and,
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../configs/database";
import { vonage } from "../configs/vonage";
import { UserInterface } from "../utils/interfaces/user";

const testNumber = "84353526385";
const usersCollection = collection(db, "users");

export const loginWithPhoneNumber = async (phoneNumber: string) => {
  const data: UserInterface[] = [];
  const src = "Skipli Testing APIs";
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const searchQuery = query(
    usersCollection,
    where("phone_number", "==", phoneNumber)
  );
  try {
    const docSnap = await getDocs(searchQuery);
    docSnap.forEach((doc: DocumentData) => {
      const user = doc.data();
      data.push({ ...user, user_id: doc.id });
    });

    if (data.length <= 0) {
      const newDocRef = doc(usersCollection);
      await setDoc(newDocRef, {
        user_id: newDocRef.id,
        phone_number: phoneNumber,
        access_code: otp,
      });
    } else {
      const userRef = doc(db, "users", data[0].user_id);
      await updateDoc(userRef, { access_code: otp });
    }

    const message = { to: phoneNumber, from: src, text: otp, type: "unicode" };
    const status = await vonage.sms.send(message);

    console.log("OTP sent successfully");

    return { message: status, userId: data[0].user_id };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const verifyAccessCode = async (user: {
  userId: string;
  accessCode: string;
  phoneNumber: string;
}) => {
  const data: UserInterface[] = [];
  const searchQuery = query(
    usersCollection,
    and(
      where("user_id", "==", user.userId),
      where("access_code", "==", user.accessCode),
      where("phone_number", "==", user.phoneNumber)
    )
  );
  try {
    const docSnap = await getDocs(searchQuery);
    docSnap.forEach((doc: DocumentData) => {
      const user = doc.data();
      if (!user) return;
      data.push(user);
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
