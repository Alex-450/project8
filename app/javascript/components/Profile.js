import React from "react";
import GetUserProfile from "../hooks/GetUserProfileHook";

const Profile = (props) => {
  const { user, error, isLoaded } = GetUserProfile();
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
