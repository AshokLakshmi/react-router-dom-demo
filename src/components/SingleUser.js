import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleUser() {
  const params = useParams();

  const [user, setUser] = useState();
  const [isLoading, setIsLoadig] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
    setIsLoadig(false);
  }, [params]);
  console.log(user);

  return (
    <div className="single-user">
      {isLoading ? (
        "Loading..."
      ) : user ? (
        <>
          <dl>
            <dt>Name:</dt>
            <dd>{user.name}</dd>
            <dt>UserName:</dt>
            <dd>{user.username}</dd>
            <dt>Email:</dt>
            <dd>{user.email}</dd>
            <dt>Phone:</dt>
            <dd>{user.phone}</dd>
          </dl>
          <div className="address">
            <dt>Address:</dt>
            <dd>
              <span>Street:</span> {user.address.street},<span>Suite:</span>
              {user.address.suite},<span>City:</span>
              {user.address.city},<span>Zipcode:</span>
              {user.address.zipcode}
            </dd>
          </div>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </>
      ) : null}
    </div>
  );
}

export default SingleUser;
