import { useState, useEffect } from "react";

const handleLogin = () => {
  const [user, setUser] = useState({});

  setUser(user);
  if (user) return props.history.push("/uploadid");
  return { user };
};

export default handleLogin;
