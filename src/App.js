import "./App.css";

import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((repsonse) => repsonse.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {!users.length ? <LoadingIndicator /> : <UserCard users={users} />}
    </div>
  );
}

export default App;
