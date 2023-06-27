import React, { useState } from "react";
import Avatar from "react-avatar";

import UserCard from "./UserCard";

const Gallery = () => {
  const [showUserCard, setShowUserCard] = useState(false);

  let user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "18px 0px 0px 0px",
          borderBottom: "1px solid #A9A9A9",
        }}
      >
        <div style={{ padding: "10px 20px 10px 50px", fontSize: "25px" }}>
          <b>Gallery</b>
        </div>
        <div
          style={{ padding: "10px 50px 10px 1000px" }}
          onClick={() => setShowUserCard(!showUserCard)}
        >
          <Avatar
            maxInitials={2}
            src={user.profilepicture}
            size="35"
            round={true}
            color={"#ff7043"}
          />
          {"  "}
          {user.name}
        </div>
      </div>
      <div style={{ paddingLeft: "1050px", marginTop: "20px" }}>
        {showUserCard && <UserCard user={user} />}
      </div>
      <div
        style={{
          paddingTop: "200px",
          textAlign: "center",
          color: "#A9A9A9",
          fontSize: "100px",
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default Gallery;
