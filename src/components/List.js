import React, { useEffect } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

import users from "../configs/Data";
import background from "../images/abstract-simple-wave-blue-background-free-vector.jpg";

const List = () => {
  const navigate = useNavigate();
  const pickRandomTwoUsers = (Ids, currentUserId) => {
    // Filter the array to remove the excludeNumber
    const filteredArray = Ids.filter((num) => num !== currentUserId);

    // Generate random indices
    const index1 = Math.floor(Math.random() * filteredArray.length);
    let index2 = Math.floor(Math.random() * (filteredArray.length - 1));

    // Adjust index2 if it overlaps with index1
    if (index2 >= index1) {
      index2++;
    }

    localStorage.setItem(
      "RandomUsers",
      JSON.stringify([filteredArray[index1], filteredArray[index2]])
    );

    return [filteredArray[index1], filteredArray[index2]];
  };

  const user = () => {
    const usersList = users.map((eachUser) => {
      return (
        <div
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() => {
            localStorage.setItem("currentUser", JSON.stringify(eachUser));
            navigate("/profile");
            pickRandomTwoUsers(
              JSON.parse(localStorage.getItem("Ids")),
              eachUser.id
            );
          }}
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
              borderBottom: "1px solid #A9A9A9",
              padding: "5px",
            }}
          ></div>
        </div>
      );
    });
    return usersList;
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("currentUser")) !== null) {
      navigate("/profile");
    }
  }, []);

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
          alignContent: "center",
        }}
      >
        <CardBody>
          <CardTitle
            style={{
              backgroundColor: "#A9A9A9",
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
