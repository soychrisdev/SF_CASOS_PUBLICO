import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Resultados from '../pages/ConsultaPage';
import Error from '../pages/Error';
import Ingreso from '../pages/Ingreso';
import IngresoCaso from '../pages/IngresoCaso';

export const router = createBrowserRouter([
	{
		path: "/CRM_SF/SF_CASOS_EXTERNO",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				path: "/CRM_SF/SF_CASOS_EXTERNO",
				element: <Ingreso />,
			},
			{
				path: "/CRM_SF/SF_CASOS_EXTERNO/ingreso",
				element: <IngresoCaso />,
			},
			{
				path: "/CRM_SF/SF_CASOS_EXTERNO/consulta",
				element: <Resultados />,
			},
			{
				path: "*",
				element: <Error />,
			}
		],
	},
]);	