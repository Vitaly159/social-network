//модули
import { Routes, Route } from "react-router-dom";//роутинг(маршрутизация)
import { Box } from "@material-ui/core";//стили material-ui
//компоненты
import { SignIn } from "./compoments/SignIn/SignIn";//страница регистрации и авторизации
import { Home } from "./compoments/Home/Home";//домашняя страница юзера

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
