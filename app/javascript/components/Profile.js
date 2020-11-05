import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

function Profile() {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <p>{userData.id}</p>
      <p>{userData.first_name}</p>
      <p>{userData.last_name}</p>
      <p>{userData.email}</p>
    </div>
  );
}

export default Profile;
