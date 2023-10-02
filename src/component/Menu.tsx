import { NavLink } from "react-router-dom";
import { useAppStore } from "../store/store";

export default function Menu() {
    const { userInfo } = useAppStore((state) => state)
    const handleMenu = (state: boolean) => {
        const navbar = document.getElementById("offCanvas");
        const overlay = document.querySelector(".navbar-overlay");
        const navbarItemsList = document.querySelector<HTMLElement>('.navbar-offcanvas--list');
        const navbarItems = document.querySelectorAll<HTMLElement>(".nav-item");
        if (state == true) {
            if (navbar) {
                navbar.classList.add('navbar-offcanvas--visible');
            }
            if (navbarItemsList) {
                navbarItemsList.style.display = "block";
            }
            if (overlay instanceof HTMLElement) {
                overlay.style.display = "block";
            }
            if (navbarItems) {
                navbarItems.forEach(function (item) {
                    item.style.display = "block";
                });
            }
        } else {
            if (navbar) {
                navbar.classList.remove('navbar-offcanvas--visible');
            }
            if (overlay instanceof HTMLElement) {
                overlay.style.display = "none";
            }
            if (navbarItemsList) {
                navbarItemsList.style.display = "flex";
            }
            if (navbarItems) {
                navbarItems.forEach(function (item) {
                    item.style.display = "none";
                });
            }
        }
    }
    return (
        <div className="container">
            <button className="d-lg-none d-flex align-items-center pl-0" id="toggle-navbar" aria-label="Ver Menu" onClick={() => handleMenu(true)}>
                <i className="material-icons icon-lg mr-1">menu</i>
                <span>Menu</span>
            </button>

            <div id="offCanvas" className="navbar-offcanvas mb-4 ">
                <ul className="nav navbar-nav navbar-offcanvas--list navbar-expand-lg justify-content-lg-around">
                    <a className="d-lg-none closebtn" onClick={() => handleMenu(false)}>
                        <span role="button" className="material-icons">
                            close
                        </span>
                    </a>
                    <li className="nav-item">
                        {userInfo?.userIsValid ? <NavLink to={'/ingreso'} className="nav-link waves-effect" >Ingreso de Casos</NavLink> : <NavLink to={'/'} className="nav-link waves-effect" >Ingreso de Casos</NavLink>}

                    </li>
                    <li className="nav-item">
                        <NavLink to={'/consulta'} className="nav-link waves-effect">Consulta de Casos</NavLink>
                    </li>

                </ul>
            </div></div>
    )
}
