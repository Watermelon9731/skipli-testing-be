import {
  and,
  arrayUnion,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../configs/database";
import { EntityFavoriteProfile } from "../entities/favorite.entity";

const favoriteCollection = collection(db, "favorites");

export const getFavoriteProfiles = async (userId: string) => {
  const data: any[] = [];

  const searchQuery = query(favoriteCollection, where("user_id", "==", userId));

  try {
    const docSnap = await getDocs(searchQuery);
    docSnap.forEach((doc: DocumentData) => {
      const favorite = doc.data();
      data.push(favorite);
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addFavoriteProfile = async (
  favoriteId: string,
  profileItem: EntityFavoriteProfile
) => {
  const favoriteRef = doc(db, "favorites", favoriteId);

  try {
    await updateDoc(favoriteRef, { profiles: arrayUnion(profileItem) });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserProfile = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  try {
    const user = await getDoc(userRef);
    if (user.exists()) {
      return user.data();
    }
    return {};
  } catch (error) {
    console.log(error);
    return error;
  }
};
