import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoadig] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
    setIsLoadig(false);
  }, []);
  return (
    <div className="users">
      {isLoading
        ? "fetching data please wait..."
        : users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`} className="users-data">
              <p>
                <span>UserName:</span>
                {user.username}
              </p>
              <p>
                <span>Email:</span>
                {user.email}
              </p>
            </Link>
          ))}
    </div>
  );
}

export default Users;
