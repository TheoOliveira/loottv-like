import {db} from "./firebase";
import {  collection, getDocs, query, limit, orderBy} from "firebase/firestore"
export const getLatestVideos = async function lateVideos(){
    const dataRef =  collection(db, "lastVideos");
    const dataQuery = query(dataRef);
    const dataSnap =  await getDocs(dataQuery)
    const res = dataSnap.docs.map(doc => doc.data())
    console.log(res)
    return res;
}