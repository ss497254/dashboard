import React from "react";
import { getServerSideProps } from "src/lib/getServerSideProps";

const Profile = () => {
  return (
    <div className="flex-grow text-2xl font-bold bg-dark-900 c">Profile</div>
  );
};

Profile.auth = true;

export { getServerSideProps };

export default Profile;
