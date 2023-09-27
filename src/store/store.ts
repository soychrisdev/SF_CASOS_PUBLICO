import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./slices/authSlice";
import { CasosSlice, createCasosSlice } from "./slices/casosSlice";
import { DataSlice, createDataSlice } from "./slices/dataSlice";
import { FormSlice, createFormSlice } from "./slices/formSlice";
import { UserSlice, createUserSlice } from "./slices/userSlice";

export const useAppStore = create<AuthSlice & DataSlice & FormSlice & UserSlice & CasosSlice>()(
	(...a) => ({
		...createAuthSlice(...a),
		...createDataSlice(...a),
		...createFormSlice(...a),
		...createUserSlice(...a),
		...createCasosSlice(...a),
	}),
);
