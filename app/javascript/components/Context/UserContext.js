import { createContext } from "react";

// const localState = JSON.parse(localStorage.getItem("user"));

var localState = null;

if (localStorage.getItem("user") === undefined) {
  localState = null;
} else {
  localState = JSON.parse(localStorage.getItem("user"));
}

export const UserContext = createContext(localState || null);
