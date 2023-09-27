// import $ from "jquery"; // Import jQuery if needed
import { useEffect, useRef } from "react";
import { useAuth } from "../hooks/query/useAuth";
import { useDataResultadoCasos } from "../hooks/query/useDataResultadoCasos";
import { useAppStore } from "../store/store";
import { ExportToExcel } from "./ExportToExcel";
import LoadingOverlayComponent from "./LoadingOverlay";
// import 'datatables.net'; // Import DataTables library CSS
//@ts-ignore


const DataTableComponent = (props) => {
	console.log(JSON.stringify(props?.data))
	const token = useAppStore((state) => state.auth);
	const { data: url } = useAuth(props?.rut);
	//@ts-ignore
	const userInfo = useAppStore((state) => state.userInfo);
	const { data, isRefetching } = useDataResultadoCasos(
		token,
		props?.rut,
		//@ts-ignore
		url?.instance_url,
		// numero
	);
	const tableRef = useRef();

	useEffect(() => {
		//@ts-ignore
		let dataTableInstanceRef: DataTables.Api | null = null;



		if (props?.data) {
			const initializeDataTable = () => {
				if (tableRef.current) {
					// Initialize DataTable only once
					//@ts-ignore
					dataTableInstanceRef = $(tableRef.current).DataTable({
						dom: '<"top top-grey"<"dataTables_actions"f>> <t> <"bottom mt-2 d-flex align-props?.datas-center justify-content-between flex-wrap"<"d-flex" il>p>',
						scrollY: "60vh",
						scrollX: true,
						lengthMenu: [
							[20, 30, 40, -1],
							[20, 30, 40, "Todas"],
						],
						aaSorting: [],
						destroy: true,

						// Add more options here as needed
					});
				}
			};
			initializeDataTable();

		}

		return () => {
			// Clean up by destroying the DataTable instance
			if (dataTableInstanceRef) {
				dataTableInstanceRef.destroy();
			}
		};
	}, [data, isRefetching]);

	if (isRefetching) {
		return <LoadingOverlayComponent />;
	}

	return (
		<div className="mt-4 expand_less" id="resultados">
			<div className="card-header d-flex align-props?.datas-center justify-content-between flex-wrap">
				<h4 className="heading h4-responsive mb-0">Resultados</h4>
				<ExportToExcel apiData={data} fileName={Date.now()} />
			</div>

			<div className="card-body">
				<div className="row mt-2">
					<div className="col-12">
						<table
							id="TablaResultados"
							className="datatables table table-hover table-striped table-bordered m-0"
							ref={tableRef}
						>
							<thead>
								<tr>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Tipo Postulante
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Tem&aacute;tica
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										T&eacute;lefono
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Nombre Alumno
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Correo
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Submotivo
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Estatus
									</th>

									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Tiempo Max Respuesta
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										RUT
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Prioridad
									</th>

									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										Descripci&oacute;n
									</th>

									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										N&uacute;mero de contacto
									</th>
									<th className="align-center text-uppercase font-weight-bold text-nowrap">
										&Aacute;mbito
									</th>
								</tr>
							</thead>
							<tbody>

								<tr key={props?.data?.caseNumber}>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.tipoPostulante ? "sin valor" : props?.data?.tipoPostulante
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.tematica ? "sin valor" : props?.data?.tematica
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.suppliedPhone ? "sin valor" : props?.data?.suppliedPhone
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.suppliedName ? "sin valor" : props?.data?.suppliedName
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.contactEmail ? "sin valor" : props?.data?.contactEmail
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.submotivo ? "sin valor" : props?.data?.submotivo
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.status ? "sin valor" : props?.data?.status
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.slaExitDate ? "sin valor" : props?.data?.slaExitDate
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.rutWeb ? "sin valor" : props?.data?.rutWeb
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.priority ? "sin valor" : props?.data?.priority
										}
									</td>
									<td className="">
										{
											//@ts-ignore
											!props?.data?.description ? "sin valor" : props?.data?.description
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.contactPhone ? "sin valor" : props?.data?.contactPhone
										}
									</td>
									<td className="text-nowrap">
										{
											//@ts-ignore
											!props?.data?.ambito ? "sin valor" : props?.data?.ambito
										}
									</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataTableComponent;
