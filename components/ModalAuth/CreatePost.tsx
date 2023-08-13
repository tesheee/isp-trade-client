import axios from "../../axios.js";
import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface ICreatePost {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePost: React.FC<ICreatePost> = ({ onClose }) => {
  const { data } = useSelector((state: RootState) => state.user);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");

  const createPost = async () => {
    try {
      await axios.post("/make-post", {
        userId: data?._id,
        name,
        description,
        images: [image],
      });
      onClose(false);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "20px" }}>Создание поста</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='modal_input'
          placeholder='Название'
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ height: "120px", fontSize: "20px", padding: "10px" }}
          placeholder='Описание'
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='modal_input'
          placeholder='Картинка (Ссылка)'
        />
      </div>

      <button className='modal_button' onClick={() => createPost()}>
        Создать пост
      </button>
    </div>
  );
};

export default CreatePost;
