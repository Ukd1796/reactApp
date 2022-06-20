// context is passing of data globally without the use of props

// it is basically used when some data needs to be passed to many different levels 

import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
