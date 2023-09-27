import { StateCreator } from "zustand";

export interface UserSlice {
    userInfo: userInfo | undefined;
    setUserInfo: (value: userInfo) => void;
    clearUserInfo: () => void;
  }
  

export interface userInfo {
    rut?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    phoneNumber? : string | undefined;
    userIsValid?: boolean | undefined;
}

const initial_state: userInfo = { 
    rut: "",
    name: "",
    email: "",
    phoneNumber: "",
    userIsValid: false
}
export const createUserSlice: StateCreator<UserSlice> = (set) => ({
	userInfo: { ...initial_state },
    setUserInfo: (value) => set( (state) => ({ userInfo: {...state.userInfo, email: value?.email, name: value?.name, rut: value?.rut,phoneNumber: value?.phoneNumber , userIsValid: value?.userIsValid } })),
    clearUserInfo: () => set( () => ({userInfo: initial_state})),
});
