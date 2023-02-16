import { doc, setDoc, updateDoc } from 'firebase/firestore';

import { db } from '~~/firebase/index.js';

const createUser = async (uid) => {
  await setDoc(doc(db, 'users', uid), {
    uid,
    isIniatilized: false,
  });
};

const updateUser = async (uid, data) => {
  await updateDoc(doc(db, 'users', uid), {
    ...data,
    isIniatilized: true,
  });
};

export { createUser, updateUser };
