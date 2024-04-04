import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../index";

const COLLECTION_NAME = "colleges";
const COLLECTION_FEEDBACKS = "feedbacks";

export const getAllColleges = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  //   return querySnapshot.map((doc) => {
  //     // console.log(`${doc.id} => ${doc.data()}`);
  //     return doc.data()
  //   });

  return querySnapshot.docs.map((doc) => doc.data());
};

export const addSimpleFeedback = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_FEEDBACKS), {
      ...data,
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
