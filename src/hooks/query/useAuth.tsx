import { useQuery } from "react-query";

interface TIinitalAuthState {
	access_token: string;
	instance_url: string;
	id: string;
	token_type: string;
	issued_at: string;
	signature: string;
}
//@ts-ignore
const fetchAuth = async ({ signal }) => {
	const response = await fetch(
		//@ts-ignore
		`${config?.baseUrl}api/auth`,
		{
			signal,
			// mode: "cors",
			// credentials: "include",
			method: "GET",
			//@ts-ignore
			// body: JSON.stringify(parametros),
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (!response.ok) {
		const error = await response.json().then((res) => res);
		return error;
		// Adjunta información extra al objeto de error.
	}

	const data = await response.json().then((res) => res);
	console.log(data)
	return data;
};


//@ts-ignore
export const useAuth = () => {
	const controller = new AbortController();
	const { signal } = controller;

	return useQuery<TIinitalAuthState, Error>(["Authentication"], () => fetchAuth({ signal }));
};
