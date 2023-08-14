import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import ProfileCard from "../components/ProfileCard";
import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useRouter } from "next/router";
import { fetchAuthMe } from "../redux/slices/userSlice";

const profile = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  //const [name, setName] = React.useState("Вадим");
  const router = useRouter();

  console.log(data);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const logoutUser = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div style={{ maxWidth: "1230px", padding: 0, margin: "0 auto" }}>
      <p style={{ marginTop: "30px", fontSize: "20px", textAlign: "center" }}>
        Профиль
      </p>
      <div className='profile_info'>
        <p>
          <AiOutlineUser />
          {data?.name}
          <BiPencil />
        </p>
        <p style={{ cursor: "pointer" }} onClick={logoutUser}>
          Выйти
          <RxExit />
        </p>
      </div>

      <hr />
      <div className='profile_settings'></div>
      <div className='profile_orders'>
        <p style={{ fontSize: "18px", margin: "20px 0" }}>Объявления:</p>
        {!data?.userPosts ? (
          <div
            style={{ textAlign: "center", fontSize: "30px", margin: "100px" }}
          >
            У вас пока нет объявлений 🥺
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              marginBottom: "100px",
            }}
          >
            {data?.userPosts.map((post, i) => (
              <ProfileCard key={i} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default profile;
