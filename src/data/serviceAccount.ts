import { ServiceAccount } from "firebase-admin";
import {
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PROJECT_ID,
} from "./constants";

export const serviceAccount: ServiceAccount = {
  projectId: FIREBASE_PROJECT_ID,
  privateKey: FIREBASE_PRIVATE_KEY,
  clientEmail: FIREBASE_CLIENT_EMAIL,
};
