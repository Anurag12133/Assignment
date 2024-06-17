import React from "react";
import "../css/PostNavbar.css";

const PostNavbar: React.FC = () => {
  return (
    <nav className="postnavbar">
      <ul className="postnavbar-menu">
        <li className="postnavbar-item">All Posts(32)</li>
        <li className="postnavbar-item">Article</li>
        <li className="postnavbar-item">Event</li>
        <li className="postnavbar-item">Education</li>
        <li className="postanavbar-item">Job</li>
      </ul>
    </nav>
  );
};

export default PostNavbar;
