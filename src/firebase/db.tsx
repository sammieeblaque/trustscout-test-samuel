import { db } from "./firebase";

// interface Id {
//   id?: number | undefined;
// }

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (
  id: string,
  username: string,
  email: string,
  count: number = 0
) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    count,
  });

export const doGetAnyUser = (uid: string) =>
  db.ref(`users/${uid}`).once("value");

export const storeCount = (uid: string, count: number) =>
  db.ref(`users/${uid}`).update({ count });
