import { StateCreator } from "zustand";
export interface FormSlice {
	valueToSend: string | null;
	ambitoSelected: string | null;
	tematicaSelected: string | null;
	subMotivoSelected: string | null;
	caseDescription: string | null;
	tipoDataSelected: string | null;
	filteredDataByTipoValue: string | null;
	setFilteredDataByTipoValue: (value: string) => void;
	setTipoDataSelected: (value: string) => void;
	setCaseDescription: (value: string) => void;
	setAmbito: (value: string) => void;
	setTematica: (value: string) => void;
	setSubMotivo: (value: string) => void;
	setValueToSend: (value: string) => void;
	clearStateFormSlice: () => void;
}
export const createFormSlice: StateCreator<FormSlice> = (set) => ({
	valueToSend: null,
	tipoDataSelected: null,
	ambitoSelected: null, // Initial state
	tematicaSelected: null, // Initial state
	subMotivoSelected: null, // Initial state
	caseDescription: null, // Initial state
	filteredDataByTipoValue: null,
	setFilteredDataByTipoValue: (value) =>
		set({ filteredDataByTipoValue: value }),
	setTipoDataSelected: (value) => set({ tipoDataSelected: value }),
	setCaseDescription: (value) => set({ caseDescription: value }),
	setValueToSend: (value) => set({ valueToSend: value }),
	setAmbito: (value) => set({ ambitoSelected: value }),
	setTematica: (value) => set({ tematicaSelected: value }),
	setSubMotivo: (value) => set({ subMotivoSelected: value }),
	clearStateFormSlice: () => set({ valueToSend: null, tipoDataSelected: null, ambitoSelected: null, tematicaSelected: null, subMotivoSelected: null, caseDescription: null, filteredDataByTipoValue: null }),
});
