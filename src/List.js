import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

import users from "./Data";
import background from "./abstract-simple-wave-blue-background-free-vector.jpg";

const List = () => {
  const navigate = useNavigate();

  const user = () => {
    const usersList = users.map((eachUser) => {
      return (
        <div
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() =>
            navigate("/profile", {
              state: {
                user: eachUser,
              },
            })
          }
        >
          <Avatar
            maxInitials={2}
            src={eachUser.profilepicture}
            size="35"
            round={true}
            color={"#ff7043"}
          />
          {"  "}
          {eachUser.name}
          <div
            style={{
              borderBottom: "1px solid #E8E6E5",
              padding: "5px",
            }}
          ></div>
        </div>
      );
    });
    return usersList;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1500px",
      }}
    >
      <Card
        className="border"
        style={{
          width: "40rem",
          height: "50rem",
          boxShadow: "0 0 10px 0 rgba(100, 100, 100, 0.26)",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "50px",
          backgroundColor: "white",
        }}
      >
        <CardBody>
          <CardTitle
            style={{
              backgroundColor: "#E8E6E5",
              width: "auto",
              height: "6rem",
              textAlign: "center",
              borderTopRightRadius: "50px",
              borderTopLeftRadius: "50px",
              paddingTop: "50px",
              fontSize: "30px",
            }}
          >
            <b> Select an account</b>
          </CardTitle>
        </CardBody>
        <ul>{user()}</ul>
      </Card>
    </div>
  );
};

export default List;
