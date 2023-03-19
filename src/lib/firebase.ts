import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "src/data/serviceAccount";

export const firestoreInstance = () => {
  const apps = getApps();

  if (apps.length === 0) {
    apps.push(initializeApp({ credential: cert(serviceAccount) }, "dashboard"));
  }

  return getFirestore(apps[0]);
};
