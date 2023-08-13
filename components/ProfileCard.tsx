import React from "react";
import { PiTrash } from "react-icons/pi";
import axios from "../axios.js";
import { IPost } from "../pages/index.jsx";
// import { useAppDispatch } from "../redux/store.js";
// import { fetchAuthMe } from "../redux/slices/userSlice.js";

const ProfileCard = ({ post }: any) => {
  //const dispatch = useAppDispatch();
  const [deletedPost, setDeletedPost] = React.useState(false);

  const deletePost = async () => {
    try {
      await axios.post("delete-post", { id: post._id });
      setDeletedPost(true);
      //dispatch(fetchAuthMe());
    } catch (error) {
      console.log(error);
    }
  };

  if (deletedPost === true) {
    return <></>;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        border: "1px solid black",
        padding: "20px",
        flexDirection: "column",
        gap: "15px",
        position: "relative",
      }}
    >
      <a
        onClick={deletePost}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "28px",
          color: "red",
        }}
      >
        <PiTrash />
      </a>
      <img
        style={{
          height: "220px",
          width: "220px",
        }}
        src={post.images[0]}
      ></img>
      <div>
        <p>Название: {post.name}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>Описание: {post.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
