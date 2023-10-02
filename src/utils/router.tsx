import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Resultados from '../pages/ConsultaPage';
import Error from '../pages/Error';
import Ingreso from '../pages/Ingreso';
import IngresoCaso from '../pages/IngresoCaso';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				path: "/",
				element: <Ingreso />,
			},
			{
				path: "/ingreso",
				element: <IngresoCaso />,
			},
			{
				path: "/consulta",
				element: <Resultados />,
			},
			{
				path: "*",
				element: <Error />,
			}
		],
	},
]);	