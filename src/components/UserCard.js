import React from "react";

function UserCard(props){
    const users = props.users;
    return (
      <div className="container">
        {users?.map((user) => (
          <div className="ec-card" style={{ padding: 10, margin: "20px 0" }}>
            <div className="row">
              <div className="col-auto">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                  alt="Avatar"
                  style={{ width: 200, height: 200 }}
                />
              </div>
              <div className="col">
                <h2>{user.name}</h2>
                <p>
                  <strong>Email: </strong>
                  {user.email}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {user.phone}
                </p>
                <p>
                  <strong>Company: </strong>
                  {user.company.name}
                </p>
                <p>
                  <strong>Website: </strong>
                  {user.website}
                </p>
                <p>
                  <strong>Address: </strong>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default UserCard;