import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./pages";
import ROUTER from "./routers";

function App() {
  return (
    <div className="relative w-full">
     <Routes>
      <Route path={ROUTER.LOGIN} element={<Login/>}/>
      <Route path={ROUTER.SIGNUP} element={<SignUp/>}/>
     </Routes>
    </div>
  );
}

export default App;
