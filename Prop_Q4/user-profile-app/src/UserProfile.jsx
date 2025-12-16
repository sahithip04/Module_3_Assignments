import { useState } from "react";
import UserInfo from "./UserInfo";

function UserProfile() {
  const [name] = useState("Sahithi");
  const [age] = useState(21);

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
