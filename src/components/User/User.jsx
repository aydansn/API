import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { Link } from "react-router-dom";

const User = () => {
  const { user } = useContext(UsersContext);
  console.log(user);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User</h1>
      {user &&
        user.length > 0 &&
        user.map((user, idx) => (
          <div
            style={{
              border: " 1px solid orange",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              to={`/singleuser?id=${user.id}`}
              key={idx}
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div>{user.address.street}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default User;
