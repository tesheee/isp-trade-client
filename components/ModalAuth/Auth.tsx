import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/store";
import { fetchAuth, fetchRegister } from "../../redux/slices/userSlice";

interface ILogin {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<ILogin> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [modalMode, setModalMode] = React.useState("Вход");
  const [canAuth, setCanAuth] = React.useState(false);

  const onClickLogin = async () => {
    if (email && password) {
      const data: any = await dispatch(fetchAuth({ email, password }));
      console.log(data);
      router.push("/profile");
      onClose(false);
      if (!data.payload) {
        setCanAuth(true);
      } else if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    }
  };

  const onClickRegister = async () => {
    setCanAuth(false);
    const data: any = await dispatch(fetchRegister({ name, email, password }));
    console.log(data);
    if (!data.payload) {
      setCanAuth(true);
    } else if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  const toggleVariant = React.useCallback(() => {
    setModalMode((currentVariant) =>
      currentVariant === "Вход" ? "Регистрация" : "Вход"
    );
  }, []);

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
        <p style={{ fontSize: "20px" }}>
          {modalMode === "Вход" ? "Вход" : "Регистрация"}
        </p>
        {modalMode !== "Вход" && (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='modal_input'
            placeholder='Имя'
          />
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='modal_input'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='modal_input'
          placeholder='Пароль'
        />
      </div>
      {modalMode === "Вход" ? (
        <button className='modal_button' onClick={() => onClickLogin()}>
          Войти
        </button>
      ) : (
        <button className='modal_button' onClick={() => onClickRegister()}>
          Регистрация
        </button>
      )}
      {canAuth && (
        <span
          onClick={toggleVariant}
          style={{ cursor: "pointer", color: "red" }}
        >
          {modalMode === "Вход"
            ? "Нет аккаунта? Зарегистрироваться"
            : "Есть аккаунт? Войти"}
        </span>
      )}
      <span onClick={toggleVariant} style={{ cursor: "pointer" }}>
        {modalMode === "Вход"
          ? "Нет аккаунта? Зарегистрироваться"
          : "Есть аккаунт? Войти"}
      </span>
    </div>
  );
};

export default Login;
