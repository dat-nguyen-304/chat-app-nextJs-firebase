import { auth, db } from "@/config/firebase";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";
import Loading from "../components/Loading";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);
  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, "users", loggedInUser?.email as string),
          {
            email: loggedInUser?.email,
            lastSeen: serverTimestamp(),
            photoUrl: loggedInUser?.photoURL,
          },
          { merge: true }
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (loggedInUser) setUserInDb();
  }, [loggedInUser]);

  if (loading) return <Loading />;
  if (!loggedInUser) return <Login />;
  return <Component {...pageProps} />;
}
