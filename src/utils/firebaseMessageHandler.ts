import { firestoreInstance } from "src/lib/firebase";
import { MessageType } from "src/types/MessageType";

const MESSAGE_COLLECTION = "messages";

export const getMessages = async (offset: number = 0) => {
  console.log(offset);

  return firestoreInstance()
    .collection(MESSAGE_COLLECTION)
    .orderBy("time", "desc")
    .offset(offset)
    .limit(15)
    .get();
};

export const addMessage = (message: MessageType) => {
  return firestoreInstance().collection(MESSAGE_COLLECTION).add(message);
};

export const deleteMessage = (id: string) => {
  throw new Error("not implemented");
};

export const deleteAllMessages = async () => {
  return firestoreInstance().recursiveDelete(
    firestoreInstance().collection(MESSAGE_COLLECTION)
  );
};
