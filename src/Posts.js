import React from "react";

const Posts = () => {
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
          <b>Posts</b>
        </div>
        <div style={{ padding: "10px 50px 10px 1000px" }}>Name</div>
      </div>
      <div
        style={{
          paddingTop: "200px",
          textAlign: "center",
          color: "#E8E6E5",
          fontSize: "100px",
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default Posts;
