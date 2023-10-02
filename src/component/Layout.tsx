import { Outlet } from "react-router-dom";
import FooterComponent from "./Footer";
import GlobalLoadingIndicator from "./GlobalLoadingIndicator";
import HeaderComponent from "./Header";
import Menu from "./Menu";

export default function Layout() {
  return (
    <div>
      <GlobalLoadingIndicator />
      <HeaderComponent
        title="Titulo"
        accessibility={undefined}
        headerFn={undefined}
      />
      <Menu />
      <div className="container">

        <Outlet />

      </div>
      <FooterComponent />
    </div>
  )
}
