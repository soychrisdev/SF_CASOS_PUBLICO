import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../store/store";

interface HeaderComponentProps {
	title: string | undefined;
	accessibility: any; // Replace 'any' with the correct type
	headerFn: any; // Replace 'any' with the correct type
}

interface Preferencia {
	oscuro: boolean;
	fontSize: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {

	const { userInfo } = useAppStore((state) => state);
	const [show, setShow] = useState(false);
	const [showDesktop, setShowDesktop] = useState(false);

	useEffect(() => {
		applyAccessibility();

		if (props.headerFn?.observers?.length) {
			$(".header-title").css("cursor", "pointer");
		}
	}, []);





	const applyAccessibility = () => {
		// Access the properties using props.config.preferencias
		//@ts-ignore
		if (!localStorage.getItem("theme")) {
			const preferencias: Preferencia = {
				oscuro: true,
				fontSize: "16px",
			};
			localStorage.setItem("theme", JSON.stringify(preferencias));
		}

		//@ts-ignore
		const themeValue = JSON.parse(localStorage.getItem("theme"));

		toggleTheme(themeValue?.oscuro);
		fontSize(themeValue?.fontSize);
	};

	const toggleTheme = (isDark: boolean) => {
		if (typeof isDark === "boolean") {
			setShow(false);
			setShowDesktop(false);
			const preferencias: Preferencia = {
				oscuro: isDark,
				fontSize: "16px",
			};
			localStorage.setItem("theme", JSON.stringify(preferencias));

			document.body.classList.toggle("dark", isDark);

			if (isDark) {
				$(".tipo-de-modo").text("Modo Claro");
				$(".logo-mobile").attr(
					"src",
					"https://www.inacap.cl/web/template-aplicaciones/img/isotipo-blanco.png",
				);
				$(".logo").attr(
					"src",
					"https://www.inacap.cl/web/template-aplicaciones/img/logo-inacap-blanco.png",
				);
			} else {
				$(".tipo-de-modo").text("Modo Oscuro");
				$(".logo-mobile").attr(
					"src",
					"https://www.inacap.cl/web/template-aplicaciones/img/isotipo.png",
				);
				$(".logo").attr(
					"src",
					"https://www.inacap.cl/web/template-aplicaciones/img/logo-inacap.png",
				);
			}
		}
	};

	const fontSize = (classList: string) => {
		if (classList) {
			document.body.classList.add(...classList.split(","));
		}
	};

	const darkModeClick = () => {
		toggleTheme(!hasDark());
		props.accessibility?.emit({ oscuro: hasDark(), fontSize: classList() });
	};

	const accessibilityClick = (increase: boolean, e: React.MouseEvent) => {
		e?.stopPropagation();

		const body = document.body;
		const classList = body.className ? body.className.split(/\s+/) : [];
		const filtered = classList.filter(function (str: string) {
			return str.includes("body-large");
		});

		if (increase) {
			switch (filtered.length) {
				case 0:
					body.classList.add("body-large");
					filtered.push("body-large");
					break;
				case 1:
					body.classList.add("body-large-1");
					filtered.push("body-large-1");
					break;
				case 2:
					body.classList.add("body-large-2");
					filtered.push("body-large-2");
					break;
			}
		} else {
			let index = -1;

			switch (filtered.length) {
				case 1:
					body.classList.remove("body-large");
					index = filtered.indexOf("body-large");
					break;
				case 2:
					body.classList.remove("body-large-1");
					index = filtered.indexOf("body-large-1");
					break;
				case 3:
					body.classList.remove("body-large-2");
					index = filtered.indexOf("body-large-2");
					break;
			}

			if (index > -1) {
				filtered.splice(index, 1);
			}
		}

		window.dispatchEvent(new Event("resize"));

		props.accessibility?.emit({ oscuro: hasDark(), fontSize: classList });
	};

	const hasDark = () => {
		return document.body.classList.contains("dark");
	};

	const classList = () => {
		const body = document.body;
		const classList = body.className ? body.className.split(/\s+/) : [];
		const filtered = classList.filter(function (str: string) {
			return str.includes("body-large");
		});

		return filtered.join(",");
	};

	return (
		<header className="header">
			<div className="header-container">
				<div className="header-logo">
					<a href="http://www.inacap.cl">
						<img
							src="https://www.inacap.cl/web/template-aplicaciones/img/isotipo.png"
							alt="INACAP"
							className="logo-mobile"
						/>
						<img
							src="https://www.inacap.cl/web/template-aplicaciones/img/logo-inacap.png"
							alt="INACAP"
							className="logo"
						/>
					</a>
				</div>

				<div className="header-title">
					<h1 id="title">Centro de Atención</h1>
				</div>

				<div className="user-info">
					<div className="user-name mr-4">
						<p>{userInfo?.rut}</p>
					</div>

					<div
						className={"user-mobile-menu user-button dropdown dropdown-toggle"}
					>
						{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<i
							className="material-icons "
							onClick={() => {
								setShow(!show);
							}}
						>
							more_vert
						</i>

						<div
							className={`dropdown-menu dropdown-menu-right ${show ? "show" : ""
								}`}
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								willChange: "transform",
								transform: "translate3d(-164px, 28px, 0px)",
							}}
						>
							<p className="dropdown-user-name">
								<p>{userInfo?.rut}</p>
							</p>
							<p className="dropdown-title dropdown-title--border">
								Accesibilidad
							</p>

							<ul className="accesibility-menu">
								<li className="accesibility-menu__item">
									<div
										id="modo-oscuro"
										className="d-flex align-items-center justify-content-between"
										onClick={darkModeClick}
									>
										<span className="tipo-de-modo">Modo Oscuro</span>
										<div className="d-flex justify-content-center">
											<a role="button">
												<i className="material-icons">brightness_medium</i>
											</a>
										</div>
									</div>
								</li>
								<li className="accesibility-menu__item">
									<div className="d-flex align-items-center justify-content-between">
										<span>Tama&ntilde;o de letra</span>
										<div className="d-flex justify-content-center">
											<button
												className="btnDecrease btn btn-round btn-fonts btn-secondary d-flex align-items-center justify-content-center waves-effect waves-light"
												onClick={(e) => accessibilityClick(false, e)}
											>
												<i className="material-icons">remove</i>
											</button>
											<button
												className="btnEnlarge btn btn-round btn-fonts btn-default d-flex align-items-center justify-content-center ml-2 mr-0 waves-effect waves-light"
												onClick={(e) => accessibilityClick(true, e)}
											>
												<i className="material-icons">add</i>
											</button>
										</div>
									</div>
								</li>
							</ul>

							<p className="dropdown-title dropdown-title--border">Cuenta</p>
							<ul className="accesibility-menu">
								<li className="accesibility-menu__item">
									<div className="d-flex align-items-center justify-content-between">
										<span id="tipo-de-modo">Cerrar Sesi&oacute;n</span>
										<div className="d-flex justify-content-center">
											{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
											<Link role="button" to={'/'} reloadDocument>
												<i className="material-icons">exit_to_app</i>
											</Link>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="user-desktop-icons">
						<div className="user-accesibility user-button dropdown dropdown-toggle">
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<i
								className="material-icons"
								onClick={() => {
									setShowDesktop(!showDesktop);
								}}
							>
								accessibility
							</i>

							<div
								className={`dropdown-menu dropdown-menu-right ${showDesktop ? "show" : ""
									}`}
								style={{
									position: "absolute",
									top: "0",
									left: "0",
									willChange: "transform",
									transform: "translate3d(-164px, 28px, 0px)",
								}}
							>
								<p className="dropdown-title">Accesibilidad</p>
								<ul className="accesibility-menu">
									<li className="accesibility-menu__item">
										{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
										<div
											id="modo-oscuro"
											className="d-flex align-items-center justify-content-between"
											onClick={darkModeClick}
										>
											<span className="tipo-de-modo">Modo Oscuro</span>
											<div className="d-flex justify-content-center">
												{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
												<a role="button">
													<i className="material-icons">brightness_medium</i>
												</a>
											</div>
										</div>
									</li>
									<li className="accesibility-menu__item">
										<div className="d-flex align-items-center justify-content-between">
											<span>Tama&ntilde;o de letra</span>
											<div className="d-flex justify-content-center">
												<button
													className="btnDecrease btn btn-round btn-fonts btn-secondary d-flex align-items-center justify-content-center waves-effect waves-light"
													onClick={(e) => accessibilityClick(false, e)}
												>
													<i className="material-icons">remove</i>
												</button>
												<button
													className="btnEnlarge btn btn-round btn-fonts btn-default d-flex align-items-center justify-content-center ml-2 mr-0 waves-effect waves-light"
													onClick={(e) => accessibilityClick(true, e)}
												>
													<i className="material-icons">add</i>
												</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className="user-logout user-button">
							<Link role="button" to={'/'} reloadDocument>
								<i className="material-icons">exit_to_app</i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderComponent;
