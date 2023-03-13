import React from "react";
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';

const Likes = ({ likes }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result.googleId || user?.result?._id;

  if (likes.length > 0) {
    return likes.find((like) => like === userId) ? (
      <>
        <CloudIcon fontSize="small" />
        &nbsp;
        {likes.length > 2
          ? `You and ${likes.length - 1} others`
          : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
      </>
    ) : (
      <>
        <CloudOutlinedIcon fontSize="small" />
        &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
      </>
    );
  }
  return (
    <>
      <CloudOutlinedIcon fontSize="small" />
      &nbsp;Like
    </>
  );
};

export default Likes;
