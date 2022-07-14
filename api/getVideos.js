import {db} from "./firebase";
import {  collection, getDocs} from "firebase/firestore"
export const getLatestVideos = async function lateVideos(){
    const data = await getDocs(collection(db, "lastVideos"));
    const res = data.docs.map(doc => doc.data())
    console.log(res)
    return res;
}