import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "./List";
import Profile from "./Profile";
import Posts from "./Posts";
import Gallery from "./Gallery";
import ToDo from "./ToDo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
