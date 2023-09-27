import { useQuery } from "react-query";
//@ts-ignore
const fetchDataCasos = async (token, url) => {
	const response = await fetch(
		//@ts-ignore
		`${config?.baseUrl}api/data`,
		{
			method: "POST",

			body: JSON.stringify({ instance_url: url }),
			// mode: "cors",
			// credentials: "include",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		},
	);

	if (!response.ok) {
		const error = await response.json().then((res) => res);
		return error;
		// Adjunta información extra al objeto de error.
	}

	const data = (await response.json().then((res) => res)) as [];
	return data;
};

export const useDataCasos = (token: string | null, url: string, dataValidador: boolean) => {
	return useQuery<[], Error>(
		["DataTipoCasos"],
		() => fetchDataCasos(token, url),
		{
			enabled: !!token,
			//@ts-ignore
			select: (data) => data.filter((item) => item.nombre !== "estudiante"),
		},
	);
};

