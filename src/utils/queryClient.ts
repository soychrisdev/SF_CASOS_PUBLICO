import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: (failureCount) => failureCount > 3 ? true : false,
			staleTime: 1000 * 60 * 60 * 6, // 6 hours
			cacheTime: 1000 * 60 * 60 * 3, // 3 hours
		},
	},
});