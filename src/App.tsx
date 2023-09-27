import { useEffect, useState } from "react";
import FormSectionComponent from "./component/FormSectionComponent";
import LoadingOverlayComponent from "./component/LoadingOverlay";
import DataTableComponent from "./component/TablaResultados";
import { useAuth } from "./hooks/query/useAuth";
import { useAppStore } from "./store/store";
function App() {
	const [isValid, setIsValid] = useState(false);
	const { data: token, isLoading } = useAuth(isValid);
	const setToken = useAppStore((state) => state.setAuth);


	useEffect(() => {
		//@ts-ignore
		if (token) {
			//@ts-ignore
			setToken(token?.access_token);
		}
	}, [token]);

	return (
		<>
			<div id="appBody" className="d-flex flex-column">
				<div className="page-content">
					<div className="navbar-overlay" />
					{/* Header */}
					
					{/* Main Content */}
					<main id="main" className="container">
						<section>
							

							{isValid && (
								<div className="card" id="buscar">
									<div className="card-header">
										<h4 className="float-left heading h4-responsive mb-0">
											B&uacute;squeda
										</h4>
									</div>
									{isLoading ? (
										"loading card selects"
									) : (
										<FormSectionComponent
											rut={isValid ? rut : "Desconocido"}
											email={isValid ? email : "Desconocido"}
										/>
									)}
									<DataTableComponent rut={isValid ? rut : "Desconocido"} />
								</div>
							)}
						</section>
						{/* Form Section */}
					</main>
				</div>
				{/* Footer */}
				
				{/* Loading Overlay */}
				{isLoading && <LoadingOverlayComponent />}
			</div>
		</>
	);
}

export default App;
