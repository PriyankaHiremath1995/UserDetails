import React from "react";
import Avatar from "react-avatar";
import { Card, CardBody, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import users from "./Data";

const UserCard = (props) => {
  const { user } = props;
  const { profilepicture, name, email } = user;
  const navigate = useNavigate();

  return (
    <Card
      color="light"
      style={{
        boxShadow: "0 0 10px 0 rgba(100, 100, 100, 0.26)",
        width: "13rem",
        borderRadius: "30px",
        zIndex: "100",
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      <CardBody style={{ textAlign: "center" }}>
        <Avatar
          maxInitials={2}
          src={profilepicture}
          size="35"
          round={true}
          color={"#ff7043"}
          padding={"10px"}
        />
        <div style={{ padding: "10px" }}>{name}</div>
        <div style={{ padding: "10px" }}>{email}</div>
        <div
          style={{
            borderBottom: "1px solid #E8E6E5",
            borderTop: "1px solid #E8E6E5",
            padding: "10px",
          }}
          onClick={() =>
            navigate("/profile", {
              state: {
                user: users[1],
              },
            })
          }
        >
          <Avatar
            maxInitials={2}
            src={users[1].profilepicture}
            size="35"
            round={true}
            color={"#ff7043"}
          />
          {"  "}
          {users[1].name}
        </div>
        <div
          style={{
            padding: "10px",
          }}
          onClick={() =>
            navigate("/profile", {
              state: {
                user: users[2],
              },
            })
          }
        >
          <Avatar
            maxInitials={2}
            src={users[2].profilepicture}
            size="35"
            round={true}
            color={"#ff7043"}
          />
          {"  "}
          {users[2].name}
        </div>
        <div style={{ padding: "10px" }}>
          <Button
            style={{
              borderRadius: "30px",
              borderColor: "tomato",
              padding: "5px",
              background: "tomato",
            }}
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
