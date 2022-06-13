import React from "react";

import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rohit Sharma",
      image:
        "https://images.thequint.com/thequint/2020-11/5a9bf154-dda1-400d-8560-50a885d0c75a/M56DM_123.JPG?rect=0%2C0%2C3838%2C2159&auto=format%2Ccompress&fmt=webp",
      places: 5
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
