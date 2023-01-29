import { db } from "~~/firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

// Get user info from firestore
const getNoti = (handler) => {
  const notiList = ref([]);
  const error = ref(null);

  // Register the firestore collection reference
  const collectionRef = collection(db, handler);
  const collectionQuery = query(collectionRef, orderBy("timestamp", "desc"));

  const unsub = onSnapshot(
    collectionQuery,
    (snap) => {
      console.log("on snapshot");
      // Check if the snap data is avaiable or not
      if (snap.docs) {
        // The data is avaiable then assign it to NotiList value
        notiList.value = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        error.value = null;
      } else {
        // Else there is no this doc on database
        error.value = "This collection is not exist";
        console.log(error.value);
      }
    },
    (err) => {
      // This is how onSnapshot work onSnapshot( snap => {}, err => {})
      // Do snap function, then if error, do next function
      console.log(err.message);
      error.value = "could not fetch the data";
    }
  );

  //unsubcribe from snapshot the collection everytime component (chatwindow) unmounted
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, notiList };
};

export default getNoti;
