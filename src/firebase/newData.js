import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const newData = async({name, email, message}) => {
    try {
        const docRef = await addDoc(collection(db, "client"), {
          name: name,
          email: email,
          message: message
        })
        console.log("Document written with ID: ", docRef.id);
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}