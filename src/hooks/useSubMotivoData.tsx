import { useEffect } from "react";
import { useAppStore } from "../store/store";
//@ts-ignore
export const useSubMotivoData = (data, ambitoSelected, tematicaSelected) => {
	const { subMotivoSelected, subMotivoData, setSubMotivoData, tipoDataSelected } = useAppStore((state) => state);

	useEffect(() => {
		if (tematicaSelected) {
			const filteredDataByTipo = data?.filter(
				//@ts-ignore
				(item) => item?.nombre === tipoDataSelected,
			);

			const subMotivo = filteredDataByTipo
				?.map(
					//@ts-ignore
					(data) =>
						//@ts-ignore
						data?.ambitos[`${ambitoSelected}`].tematicas[`${tematicaSelected}`]
							?.submotivos,
				)
				//@ts-ignore
				.reduce((result, obj) => {
					if (obj) {
						return Object?.keys(obj);
					}
				}, {});

			setSubMotivoData(subMotivo);
		}
	}, [tematicaSelected]);

	return { subMotivoSelected, subMotivoData };
};
