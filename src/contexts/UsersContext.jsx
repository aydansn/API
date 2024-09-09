import { createContext, useEffect, useState } from "react";
export const UsersContext = createContext();
export const UserProvider = (props) => {
  console.log(props);
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <UsersContext.Provider value={{ user }}>
      {props.children}
    </UsersContext.Provider>
  );
};
