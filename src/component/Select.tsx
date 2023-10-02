import { useEffect } from "react";
import { useAppStore } from "../store/store";

type SelectProps = {
	id: string;
	required: boolean;
	label: string;
	data: [] | null;
	isLoading: boolean;
	disabled: boolean;
};

export default function Select({
	id,
	label,
	required,
	data,
	disabled,
}: SelectProps) {
	const { setAmbito, setTematica, setSubMotivo, setTipoDataSelected } = useAppStore((state) => state);
	const startSelects = $(".chosen-select");
	useEffect(() => {
		if (data) {
			const chosenSelect = $(`#${id}`);
			const tipo = document.getElementById("select-tipo") as HTMLSelectElement;
			const ambito = document.getElementById(
				"select-ambito",
			) as HTMLSelectElement;

			const tematicaMotivo = document.getElementById(
				"select-tematica",
			) as HTMLSelectElement;
			const subMotivo = document.getElementById(
				"select-submotivo",
			) as HTMLSelectElement;

			setTipoDataSelected(tipo?.value);
			setAmbito(ambito?.value);
			setTematica(tematicaMotivo?.value);
			setSubMotivo(subMotivo?.value);
			chosenSelect.trigger("chosen:updated");

			chosenSelect.chosen().change((e) => {
				if (id === "select-ambito") {
					//@ts-ignore
					setAmbito(e.target.value);
				}
				if (id === "select-tematica") {
					//@ts-ignore
					setTematica(e.target.value);
				}

				if (id === "select-submotivo") {
					//@ts-ignore
					setSubMotivo(e.target.value);
				}

				if (id === "select-tipo") {
					//@ts-ignore
					setTipoDataSelected(e.target.value);
				}
			});
			if (chosenSelect.length) {
				startSelects.chosen({
					disable_search_threshold: 10,
					no_results_text: "Sin Resultados para: ",
					width: "100%",
					placeholder_text_single: "Seleccione...",
				});
			}
		}
	}, [data, setTipoDataSelected]);

	if (!data) return 'Loading...'


	return (
		<>
			<select
				id={id}
				className="chosen-select"
				required={required}
				disabled={disabled}
			>
				{data?.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>

			<label htmlFor={id} className="active">
				{label}
			</label>
			{required && (
				<div className="invalid-feedback">*Este campo es requerido</div>
			)}
		</>
	);
}
