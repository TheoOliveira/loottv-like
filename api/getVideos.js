import {db} from "./firebase";
import {  collection, getDocs, query, limit, orderBy, where} from "firebase/firestore"
import {checkYesterday} from "../utils/checkPeriods"
export const getLatestVideos = async function lateVideos(date){
    console.log(date)
    const dataRef =  collection(db, "lastVideos");
    const dataQuery = query(dataRef, where('publishTime', '>', date))
    console.log('data query', dataQuery)
    const dataSnap =  await getDocs(dataQuery)
    const res = dataSnap.docs.map(doc => doc.data())
    return res;
}