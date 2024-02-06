import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as UserService from "../../services/auth.api";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { setUser } from "../../redux/slice/auth.slice";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const defaultData = {
    userName: "",
    password: "",
  };
  const [data, setData] = useState(defaultData);
  const LoginWithUserPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await UserService.loginAPI(data);
      // Hiển thị thông báo lỗi từ máy chủ
      if (res && res.status === "ERROR") {
        console.log("error", res.message);
      }
      // Hiển thị thành công
      else if (res.status === "OK") {
        localStorage.setItem("access_token", JSON.stringify(res?.access_token));
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(res?.refresh_token)
        );
        if (res?.access_token) {
          const decoded = jwt_decode(res?.access_token);
          if (decoded?.id) {
            handleGetDetailsUser(decoded?.id, res?.access_token);
          }
        }
        alert("success", "Đăng nhập thành công");
        setTimeout(() => {
          if (location?.state) {
            navigate(location?.state);
          } else {
            navigate("/");
          }
        }, 2000);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);
    const res = await UserService.getDetailUserAPI(id, token);
    console.log(res);
    dispatch(
      setUser({
        ...res?.data,
        access_token: token,
        refresh_token: refreshToken,
      })
    );
  };
  return (
    <main className="w-full flex z-0">
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="text-center">
            <img src={""} width={100} className="mx-auto" alt="" />
            <div className="mt-2 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Đăng nhập với chúng tôi!
              </h3>
              <p className="flex items-center gap-x-1">
                Bạn chưa có tài khoản?
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">UserName</label>
              <input
                type="text"
                onChange={(e) => setData({ ...data, userName: e.target.value })}
                value={data?.userName}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                autoComplete=""
                type="password"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
                value={data?.password}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="flex items-center justify-start text-sm">
              {/* <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="checkbox-item peer hidden"
                />
                <label
                  htmlFor="remember-me-checkbox"
                  className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"></label>
                <span>Remember me</span>
              </div> */}
              <Link
                to="/forget-password"
                className="text-center text-indigo-600 hover:text-indigo-500">
                Forget Password?
              </Link>
            </div>
            <button
              onClick={LoginWithUserPassword}
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
