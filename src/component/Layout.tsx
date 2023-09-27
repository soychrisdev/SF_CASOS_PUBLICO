import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/store";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import Menu from "./Menu";

export default function Layout() {
  const navigate = useNavigate();
  const { userInfo } = useAppStore((state) => state)
  useEffect(() => {
    if (userInfo?.userIsValid === false) {
      navigate("/")
    }
  }, [])
  return (
    <div>
      <HeaderComponent
        title="Titulo"
        accessibility={undefined}
        headerFn={undefined}
      />
      <Menu />
      <Outlet />
      <FooterComponent />
    </div>
  )
}
