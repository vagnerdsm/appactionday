import { auth, db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useContext } from 'react';

export interface User {
    uid: string;
    display_name: string;
    photo_url: string;
    email: string;
    emailVerified: boolean;
}

export const userInfosContext = createContext<User | undefined >(undefined)



