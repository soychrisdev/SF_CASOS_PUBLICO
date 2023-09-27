import { StateCreator } from "zustand";

export interface CasosSlice {
    casosInfo: casosInfo | undefined;
    setCasosInfo: (value: casosInfo) => void;
  }
  

export interface casosInfo {
    rut?: string | undefined;
    numCaso?: string | undefined;

}

const INITIAL_STATE: casosInfo = {
    numCaso: "",
    rut: "",
   
}
export const createCasosSlice: StateCreator<CasosSlice> = (set) => ({
	casosInfo: INITIAL_STATE,
    //set and update prev state
    setCasosInfo: (value) => set( (state) => ({ casosInfo: {...state.casosInfo, numCaso: value?.numCaso, rut: value?.rut} })),
    // setUserInfo: (prev) => (value) => set({ userInfo: { ...prev, email: value?.email, name: value?.name, rut: value?.rut, userIsValid: value?.userIsValid  } }),
    clearUserInfo: () => set({ casosInfo: INITIAL_STATE}),
});
