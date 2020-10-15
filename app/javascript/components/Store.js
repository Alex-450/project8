export const UserContext = React.createContext({});

import React, { useState } from "react";

const Store = ({ children }) => {
  const [user, setUser] = useState({});
  return <UserContext.Provider value={[user, setUser]}></UserContext.Provider>;
};

export default Store;
