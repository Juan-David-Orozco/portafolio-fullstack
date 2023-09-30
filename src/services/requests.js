import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'

export const requestGetProjects = async () => {
  return await getDocs(collection(db, "frontend"))
}

// export const onGetProjects = () => {
//   onSnapshot(collection(db, "frontend"), (querySnapshot) => {
//     const docs = []
//     querySnapshot.forEach((doc) => {
//       docs.push({id: doc.id, ...doc.data()})
//     })
//     console.log(docs)
//     return docs
//   });
// }

// onGetProjects()