import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
	RouterProvider,
	createBrowserRouter
} from "react-router-dom";
import Layout from "./component/Layout.tsx";
import "./index.css";
import Consulta from "./pages/Consulta.tsx";
import Error from "./pages/Error.tsx";
import Ingreso from "./pages/Ingreso.tsx";
import Resultados from "./pages/Resultados.tsx";

const router = createBrowserRouter([
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
				path: "/consulta",
				element: <Consulta />,
			},
			{
				path: "/resultados",
				element: <Resultados />,
			},
			{
				path: "*",
				element: <Error />,
			}
		],
	},
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>,
);
