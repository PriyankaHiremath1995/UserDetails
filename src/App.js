import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card, Nav, NavItem } from "reactstrap";

import List from "./components/List";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Gallery from "./components/Gallery";
import ToDo from "./components/ToDo";

const App = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [profileColor, setProfileColor] = useState("white");
  const [postsColor, setPostsColor] = useState("black");
  const [galleryColor, setGalleryColor] = useState("black");
  const [todoColor, setTodoColor] = useState("black");

  return (
    <>
      {user !== null && (
        <Card
          style={{
            boxShadow: "0 0 10px 0 rgba(100, 100, 100, 0.26)",
            width: "100px",
            height: "500px",
            borderRadius: "30px",
            zIndex: "100",
            position: "absolute",
            backgroundColor: "#0000CD",
            padding: "10px",
            marginTop: "95px",
          }}
        >
          <Nav style={{ paddingTop: "100px" }}>
            <NavItem
              style={{
                borderBottom: "0.5px solid white",
                padding: "10px",
                color: profileColor,
              }}
              onClick={() => {
                navigate("/profile");
                setProfileColor("white");
                setGalleryColor("black");
                setPostsColor("black");
                setTodoColor("black");
              }}
            >
              <b>Profile</b>
            </NavItem>
            <NavItem
              style={{
                borderBottom: "0.5px solid white",
                padding: "10px",
                color: postsColor,
              }}
              onClick={() => {
                navigate("/posts");
                setProfileColor("black");
                setGalleryColor("black");
                setPostsColor("white");
                setTodoColor("black");
              }}
            >
              <b>Posts</b>
            </NavItem>
            <NavItem
              style={{
                borderBottom: "0.5px solid white",
                padding: "10px",
                color: galleryColor,
              }}
              onClick={() => {
                navigate("/gallery");
                setProfileColor("black");
                setGalleryColor("white");
                setPostsColor("black");
                setTodoColor("black");
              }}
            >
              <b>Gallery</b>
            </NavItem>
            <NavItem
              style={{
                borderBottom: "0.5px solid white",
                padding: "10px",
                color: todoColor,
              }}
              onClick={() => {
                navigate("/todo");
                setProfileColor("black");
                setGalleryColor("black");
                setPostsColor("black");
                setTodoColor("white");
              }}
            >
              <b>ToDo</b>
            </NavItem>
          </Nav>
        </Card>
      )}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/" element={<List />} />
        {/* anymatch */}
        <Route path="*" element={<List />} />
      </Routes>
    </>
  );
};

export default App;
