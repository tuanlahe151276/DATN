import { Route, Routes } from "react-router-dom";
import { Home, Login, NewPost, SignUp, User } from "./pages";
import ROUTER from "./routers";

function App() {
  return (
    <div className="relative w-full">
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.LOGIN} element={<Login />} />
        <Route path={ROUTER.SIGNUP} element={<SignUp />} />
        <Route path={ROUTER.NEWPOST} element={<NewPost />} />
        <Route path={ROUTER.USER} element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
