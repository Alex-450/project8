import { createContext } from "react";

const localState = JSON.parse(localStorage.getItem("user"));

export const UserContext = createContext(localState || null);
