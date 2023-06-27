import React, { useState } from "react";
import Avatar from "react-avatar";

import googlemap from "../images/googlemap.png";
import UserCard from "./UserCard";

const Profile = () => {
  const [showUserCard, setShowUserCard] = useState(false);

  let user = JSON.parse(localStorage.getItem("currentUser"));
  const { lat, lng } = user.address.geo;

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
          <b>Profile</b>
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
      <div
        style={{
          display: "flex",
          margin: "18px 0px 0px 0px",
        }}
      >
        <div style={{ textAlign: "center", paddingLeft: "150px" }}>
          <div style={{ marginTop: "10px", borderBottom: "1px solid #A9A9A9" }}>
            <Avatar
              maxInitials={2}
              src={user.profilepicture}
              size="200"
              round={true}
              color={"#ff7043"}
            />
            <div style={{ marginLeft: "50px", marginTop: "10px" }}>
              <b>{user.name}</b>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>Username :</b>
              </label>
              <label className="ml-2" style={{ padding: "10px" }}>
                <b>{user.username}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>e-mail :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.email}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>Phone :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.phone}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>Website :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.website}</b>
              </label>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div
              style={{
                marginLeft: "50px",
                marginTop: "10px",
                color: "#A9A9A9",
              }}
            >
              <b>Company</b>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>Name :</b>
              </label>
              <label className="ml-2" style={{ padding: "10px" }}>
                <b>{user.company.name}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>catchphrase :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.company.catchPhrase}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b>bs :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.company.bs}</b>
              </label>
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid #A9A9A9",
            marginLeft: "50px",
          }}
        >
          <div style={{ paddingLeft: "600px" }}>
            {showUserCard && <UserCard user={user} />}
          </div>

          <div
            style={{
              marginLeft: "30px",
              marginTop: "10px",
              color: "#A9A9A9",
            }}
          >
            <b>Address : </b>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#A9A9A9" }}>
              <b>Street :</b>
            </label>
            <label className="ml-2" style={{ padding: "10px" }}>
              <b>{user.address.street}</b>
            </label>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#A9A9A9" }}>
              <b>Suite :</b>
            </label>
            <label className="ml-2" style={{ marginLeft: "10px" }}>
              <b>{user.address.suite}</b>
            </label>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#A9A9A9" }}>
              <b>City :</b>
            </label>
            <label className="ml-2" style={{ marginLeft: "10px" }}>
              <b>{user.address.city}</b>
            </label>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#A9A9A9" }}>
              <b>Zipcode :</b>
            </label>
            <label className="ml-2" style={{ marginLeft: "10px" }}>
              <b>{user.address.zipcode}</b>
            </label>
          </div>
          <div style={{ padding: "20px 20px 10px 20px" }}>
            <img
              src={googlemap}
              style={{ width: "800px", height: "300px", borderRadius: "8px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "610px",
            }}
          >
            <div>
              <label style={{ color: "#A9A9A9" }}>
                <b> Lat:</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{lat}</b>
              </label>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <label style={{ color: "#A9A9A9" }}>
                <b> Long:</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{lng}</b>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
