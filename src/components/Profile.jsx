import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Profile = () => {
  const { darkMode, language } = useContext(UserContext);
  return <div>Profile</div>;
};

export default Profile;
