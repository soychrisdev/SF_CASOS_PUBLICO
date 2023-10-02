import { useMemo } from "react";
import { useAppStore } from "../store/store";
//@ts-ignore
export const useTematicaData = (data, ambitoSelected, tipoDataStored) => {
	const { tematicaSelected, setTematicaData, tematicaData, setSubMotivoData, tipoDataSelected } = useAppStore((state) => state);

	useMemo(() => {
		if (ambitoSelected) {
			const filteredDataByTipo = data?.filter(
				//@ts-ignore
				(item) => item?.nombre === tipoDataSelected,
			);

			const tematicaMotivo = filteredDataByTipo
				//@ts-ignore
				?.map((data) => data?.ambitos[`${ambitoSelected}`]?.tematicas)
				//@ts-ignore
				?.reduce((result, obj) => {
					return Object?.keys(obj);
				}, {});
			setTematicaData(tematicaMotivo);
			setSubMotivoData([]);
		}
	}, [ambitoSelected]);

	return { tematicaSelected, tematicaData };
};
