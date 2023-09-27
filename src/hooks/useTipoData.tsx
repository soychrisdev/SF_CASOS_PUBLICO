import { useEffect } from "react";
import { useAppStore } from "../store/store";
//@ts-ignore
export const useTipoData = (data) => {
	const { setTipoData, tipoData: tipoDataStored } = useAppStore((state) => state);
	useEffect(() => {
		if (data) {
			const tipoData = data
				//@ts-ignore
				?.map((data) => data.nombre);
			setTipoData(tipoData);
		}
	}, [data]);

	return { tipoDataStored };
};
