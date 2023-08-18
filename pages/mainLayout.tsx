import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useAppDispatch } from "../redux/store";
import { fetchAuthMe } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

interface IMainLayout {
  children: any;
  isDarkMode: any;
  setIsDarkMode: any;
}

const mainLayout: React.FC<IMainLayout> = ({
  children,
  isDarkMode,
  setIsDarkMode,
}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <div id='portal'></div>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}>
        {" "}
      </Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default mainLayout;
