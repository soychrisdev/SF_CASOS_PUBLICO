import { useQuery } from "react-query";
//@ts-ignore

interface TDataAmbito {
	nombre: string;
	tematicas: {
		[key: string]: {
			label: string;
			submotivos: {
				[key: string]: {
					label: string;
					[key: string]: string;
				};
			};
		};
	};

}

const fetchDataAmbito = async (token: string | undefined, url: string): Promise<TDataAmbito[]> => {
	const response = await fetch(
		//@ts-ignore
		`${config.baseUrl}api/data`,
		{
			method: "POST",
			body: JSON.stringify({ instance_url: url }),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		},
	);

	if (!response.ok) {
		const error = await response.json().then((res) => res);
		return error;
	}

	const data = await response.json();
	return [data];
};

export const useDataAmbito = (token: string | undefined, url: string) => {
	return useQuery<TDataAmbito[], Error>(["Data"], () => fetchDataAmbito(token, url), {
		enabled: !!token,
		//@ts-ignore
		// select: (data) => data.filter((item) => item.nombre === "estudiante"),
	});
};




