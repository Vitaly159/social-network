//модули
import { Routes, Route } from "react-router-dom"; //роутинг(маршрутизация)
import { Box } from "@material-ui/core"; //стили material-ui
//компоненты
import { AuthorizationPage } from "./pages/AuthorizationPage"; //страница регистрации и авторизации
import { HomePage } from "./pages/HomePage"; //домашняя страница юзера
import { useEffect, useState } from "react";
import { getUser, setIsAuth } from "./reducers/Tweets";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useNavigate, useLocation } from "react-router-dom";

const routing = (path: string, isAuth: boolean | null) => {
  if (isAuth) {
    return path;
  }
};

function App() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  const isAuth = useAppSelector((state) => state.tweets.isAuth);

  const [currPath, setCurrPath] = useState(
    localStorage.currPath ? JSON.parse(localStorage.currPath) : []
  );

  useEffect(() => {
    currPath !== "/" &&
      localStorage.setItem("currPath", JSON.stringify(currPath));
  }, [currPath]);

  useEffect(() => {
    setCurrPath(location.pathname);
  }, [location.pathname]);

  const setUser = () => {
    const isUserAuth: string | null = localStorage.getItem("twHash");
    const str = isUserAuth?.replace(/[\"]/g, "");
    fetch("api/set-user", {
      method: "post",
      body: JSON.stringify({ hash: str }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => dispatch(getUser([res])));
  };

  const checkAuth = (): void => {
    const isUserAuth: string | null = localStorage.getItem("twHash");
    const str = isUserAuth?.replace(/[\"]/g, "");
    fetch("api/set-user", {
      method: "post",
      body: JSON.stringify({ hash: str }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        isUserAuth && res.confirmed_hash == str
          ? dispatch(setIsAuth(true))
          : dispatch(setIsAuth(false));
      });
  };

  useEffect(() => {
    isAuth ? navigate("/home") : navigate("/");
  }, [isAuth]);

  useEffect(() => {
    setUser();
    checkAuth();
  }, []);

  return (
    <>
      {isAuth !== null && (
        <Box>
          <Routes>
            <Route path="/" element={<AuthorizationPage checkAuth={checkAuth} />} />
            <Route path={routing("/home", isAuth)} element={<HomePage />} />
          </Routes>
        </Box>
      )}
    </>
  );
}

export default App;
