import { doc, setDoc } from 'firebase/firestore';

import { db } from '~~/firebase/config.js';

const createUser = async (uid) => {
  await setDoc(doc(db, 'users', uid), {
    uid,
    isIniatilized: false,
  });
};

export { createUser };
