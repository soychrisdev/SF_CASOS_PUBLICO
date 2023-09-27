import { useQuery } from "react-query";
//@ts-ignore
const fetchAuth = async ({ signal }) => {
	const response = await fetch(
		//@ts-ignore
		`${config?.baseUrl}api/auth`,
		{
			// mode: "cors",
			// credentials: "include",
			signal,
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
	return data;
};

interface AuthData {
	access_token: string;
	instance_url: string;
	id: string;
	token_type: string;
	issued_at: string;
	signature: string;
}
//@ts-ignore
export const useAuth = () => {
	const abortController = new AbortController();
	return useQuery<AuthData, Error>(["Authentication"], () => fetchAuth({ signal: abortController.signal }), {
		onSettled: () => abortController.abort(),
	});
};
