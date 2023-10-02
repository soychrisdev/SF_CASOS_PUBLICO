import { useMemo } from "react";
import { useAppStore } from "../store/store";
//@ts-ignore
export const useAmbitoData = (data) => {

	const { setAmbitoData, ambitoSelected, ambitoData, tipoDataSelected, filteredDataByTipoValue, setFilteredDataByTipoValue } = useAppStore((state) => state);

	useMemo(() => {
		if (data) {
			const filteredDataByTipo = data?.filter(
				//@ts-ignore
				(item) => item?.nombre === tipoDataSelected,
			);
			setFilteredDataByTipoValue(filteredDataByTipo);

			if (filteredDataByTipo) {
				const filtered = filteredDataByTipo
					//@ts-ignore
					?.map((data) => data.ambitos)
					//@ts-ignore
					?.reduce((result, obj) => {
						return Object.keys(obj);
					}, {});
				setAmbitoData(filtered);
			}
		}
	}, [tipoDataSelected]);

	return {
		ambitoSelected,
		tipoDataSelected,
		filteredDataByTipoValue,
		ambitoData: ambitoData as [],
	};
};
