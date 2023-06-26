import React, { useState } from "react";
import Avatar from "react-avatar";
import { useLocation } from "react-router-dom";
import { Card, Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

import googlemap from "./googlemap.png";
import UserCard from "./UserCard";

const Profile = () => {
  const [showUserCard, setShowUserCard] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  let user = location.state.user;
  const { lat, lng } = user.address.geo;

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "18px 0px 0px 0px",
          borderBottom: "1px solid #E8E6E5",
        }}
      >
        <div style={{ padding: "10px 20px 10px 50px" }}>
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
        <Card
          style={{
            boxShadow: "0 0 10px 0 rgba(100, 100, 100, 0.26)",
            width: "100px",
            height: "500px",
            borderRadius: "30px",
            zIndex: "100",
            position: "absolute",
            backgroundColor: "#0000CD",
          }}
        >
          <Nav style={{ paddingTop: "100px", color: "white" }}>
            <NavItem
              style={{ borderBottom: "0.5px solid white", padding: "10px" }}
            >
              Profile
            </NavItem>
            <NavItem
              style={{ borderBottom: "0.5px solid white", padding: "10px" }}
              onClick={() => navigate("/posts")}
            >
              Posts
            </NavItem>
            <NavItem
              style={{ borderBottom: "0.5px solid white", padding: "10px" }}
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </NavItem>
            <NavItem
              style={{ borderBottom: "0.5px solid white", padding: "10px" }}
              onClick={() => navigate("/todo")}
            >
              ToDo
            </NavItem>
          </Nav>
        </Card>
        <div style={{ textAlign: "center", paddingLeft: "100px" }}>
          <div style={{ marginTop: "10px", borderBottom: "1px solid #E8E6E5" }}>
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
              <label style={{ color: "#E8E6E5" }}>
                <b>Username :</b>
              </label>
              <label className="ml-2" style={{ padding: "10px" }}>
                <b>{user.username}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
                <b>e-mail :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.email}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
                <b>Phone :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.phone}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
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
                color: "#E8E6E5",
              }}
            >
              <b>Company</b>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
                <b>Name :</b>
              </label>
              <label className="ml-2" style={{ padding: "10px" }}>
                <b>{user.company.name}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
                <b>catchphrase :</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{user.company.catchPhrase}</b>
              </label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
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
            borderLeft: "1px solid #E8E6E5",
            marginLeft: "50px",
          }}
        >
          <div style={{ paddingLeft: "700px" }}>
            {showUserCard && <UserCard user={user} />}
          </div>

          <div
            style={{
              marginLeft: "30px",
              marginTop: "10px",
              color: "#E8E6E5",
            }}
          >
            <b>Address : </b>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#E8E6E5" }}>
              <b>Street :</b>
            </label>
            <label className="ml-2" style={{ padding: "10px" }}>
              <b>{user.address.street}</b>
            </label>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#E8E6E5" }}>
              <b>Suite :</b>
            </label>
            <label className="ml-2" style={{ marginLeft: "10px" }}>
              <b>{user.address.suite}</b>
            </label>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#E8E6E5" }}>
              <b>City :</b>
            </label>
            <label className="ml-2" style={{ marginLeft: "10px" }}>
              <b>{user.address.city}</b>
            </label>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <label style={{ color: "#E8E6E5" }}>
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
              <label style={{ color: "#E8E6E5" }}>
                <b> Lat:</b>
              </label>
              <label className="ml-2" style={{ marginLeft: "10px" }}>
                <b>{lat}</b>
              </label>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <label style={{ color: "#E8E6E5" }}>
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
