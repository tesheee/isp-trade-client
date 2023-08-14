import React from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineMenu,
} from "react-icons/ai";
import { useRouter } from "next/router";
import ModalLayout from "../ModalAuth/ModalLayout";
import Auth from "../ModalAuth/Auth";
import axios from "axios";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { setFindItems } from "../../redux/slices/searchSlice";
import CreatePost from "../ModalAuth/CreatePost";

const Header = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  const [isMobile, setIsMobile] = React.useState(false);
  const [mobilePopup, setMobilePopup] = React.useState(false);
  const [authModal, setAuthModal] = React.useState(false);
  const [postModal, setPostModal] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const onClickProfile = (): void => {
    if (data !== null) {
      router.push("/profile");
      return;
    }
    setAuthModal(!authModal);
  };

  const onClickAddPost = () => {
    if (data !== null) {
      setPostModal(!postModal);
      return;
    }
    window.alert("Ты не можешь создать пост без аккаунта");
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://isp-trade.onrender.com/search?value=${search}`
      );
      dispatch(setFindItems(data));
      router.push("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <div className='menu'>
          <Link href={"/"}><img src='./public/isp.png'/></Link>
        </div>
        <div className='logo'></div>
        <nav>
          {!isMobile ? (
            <ul>
              <li>
                <div style={{ position: "relative" }}>
                  <BiSearch
                    style={{
                      position: "absolute",
                      right: "8px",
                      fontSize: "18px",
                    }}
                    onClick={onClickSearch}
                  ></BiSearch>
                  <input
                    autoComplete='off'
                    id='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      borderRadius: "25px",
                      border: "1px solid gray",
                      padding: "10px",
                      marginTop: "-10px",
                    }}
                  ></input>
                </div>
              </li>
              <li onClick={onClickProfile}>
                <AiOutlineUser
                  style={{
                    borderRadius: "25px",
                    border: "1px solid gray",
                    padding: "10px",
                    marginTop: "-10px",
                  }}
                />
              </li>
              <li>
                <div>
                  <Link href={"/"}>
                    <div>
                      <AiOutlineHome
                        style={{
                          borderRadius: "25px",
                          border: "1px solid gray",
                          padding: "10px",
                          marginTop: "-10px",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div onClick={onClickAddPost}>
                  <AiOutlinePlus
                    style={{
                      borderRadius: "25px",
                      border: "1px solid gray",
                      padding: "10px",
                      marginTop: "-10px",
                      width: "30px",
                    }}
                  />
                </div>
              </li>
            </ul>
          ) : (
            <div onClick={() => setMobilePopup((prev) => !prev)}>
              <AiOutlineMenu
                style={{ fontSize: "20px", verticalAlign: "bottom" }}
              />
            </div>
          )}
        </nav>
        <ModalLayout onClose={setPostModal} show={postModal}>
          <CreatePost onClose={setPostModal}></CreatePost>
        </ModalLayout>
        <ModalLayout onClose={setAuthModal} show={authModal}>
          <Auth onClose={setAuthModal}></Auth>
        </ModalLayout>
      </header>
      {mobilePopup && (
        <div
          className='mobile_header'
          style={{
            position: "fixed",
            padding: "10px",
            display: "flex",
            width: "100%",
            backgroundColor: "white",
            zIndex: "5",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 45px",
              listStyle: "none",
            }}
          >
            <li>
              <div style={{ position: "relative" }}>
                <BiSearch
                  style={{
                    position: "absolute",
                    right: "8px",
                    fontSize: "18px",
                  }}
                  onClick={onClickSearch}
                ></BiSearch>
                <input
                  autoComplete='off'
                  id='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    borderRadius: "25px",
                    border: "1px solid gray",
                    padding: "10px",
                    marginTop: "-10px",
                  }}
                ></input>
              </div>
            </li>
            <li onClick={onClickProfile}>
              <AiOutlineUser
                style={{
                  borderRadius: "25px",
                  border: "1px solid gray",
                  padding: "10px",
                  marginTop: "-10px",
                }}
              />
            </li>
            <li>
              <div>
                <Link href={"/"}>
                  <div>
                    <AiOutlineHome
                      style={{
                        borderRadius: "25px",
                        border: "1px solid gray",
                        padding: "10px",
                        marginTop: "-10px",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div onClick={onClickAddPost}>
                <AiOutlinePlus
                  style={{
                    borderRadius: "25px",
                    border: "1px solid gray",
                    padding: "10px",
                    marginTop: "-10px",
                    width: "30px",
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
