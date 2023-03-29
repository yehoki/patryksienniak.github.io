import "@/styles/globals.css";
import type { AppProps } from "next/app";

import React, { createContext, useContext, useState } from "react";

import { userTypeContext, userType, loginContext} from "@/types/types";

export const UserContext = createContext<null | userTypeContext>(null);

export const LoginContext = createContext<null | loginContext>(null);


export const emptyUser: userType = {
  username: "",
  token: "",
  name: "",
  id: "",
  books: []
};



export default function App({ Component, pageProps }: AppProps) {
  const [check, setCheck] = useState("");
  const [user, setUser] = useState<userType>(emptyUser);
  //Begin logged out initially
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
    </LoginContext.Provider>
  );
}
