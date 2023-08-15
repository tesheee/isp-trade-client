import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useAppDispatch } from "../redux/store";
import { fetchAuthMe } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

interface IMainLayout {
  children: any;
}

const mainLayout: React.FC<IMainLayout> = ({ children, isDarkMode }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <div id='portal'></div>
      <Header isDarkMode={isDarkMode} />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default mainLayout;
