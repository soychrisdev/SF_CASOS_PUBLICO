import { useQuery } from "react-query";
//@ts-ignore
const fetchDataResultadoCasos = async (token, rut, url) => {
	const response = await fetch(
		//@ts-ignore
		`${config?.baseUrl}api/CasosRestServicePublic?rut=${'20127090-1'}&numero=${'00001566'}`,
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

export const useDataResultadoCasos = (
	token: string | undefined,
	rut: string | undefined,
	url: string | undefined,
) => {
	return useQuery<[], Error>(
		["DataCasos"],
		() => fetchDataResultadoCasos(token, rut, url),
		{
			enabled: !!token,
		},
	);
};
