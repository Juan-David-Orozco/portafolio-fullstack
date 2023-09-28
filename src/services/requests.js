import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'

export const requestGetProjects = async () => {
  return await getDocs(collection(db, "frontend"))
}