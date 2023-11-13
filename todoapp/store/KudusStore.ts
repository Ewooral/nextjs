// KuduStore.ts
import {create} from 'zustand';
import {devtools} from "zustand/middleware";


interface Kudu {
    id: number;
    text: string;
    completed: boolean;
}

interface KuduStore {
    kudus: Kudu[];
    addKudu: (kudu: Kudu) => void;
    removeKudu: (id: number) => void;
    updateKudu: (updatedKudu: Kudu) => void;
    editKudu: (id: number, newText: string) => void;
}

// @ts-ignore

const useKuduStore = create<KuduStore>(devtools((set) => ({
    kudus: [],
    addKudu: (kudu) => set((state) => ({ kudus: [...state.kudus, kudu] }), false, 'addKudu'),
    removeKudu: (id) => set((state) => ({ kudus: state.kudus.filter((kudu) => kudu.id !== id) }), false, 'removeKudu'),
    updateKudu: (updatedKudu) => set((state) => ({
        kudus: state.kudus.map((kudu) => (kudu.id === updatedKudu.id ? updatedKudu : kudu)),
    }), false, 'updateKudu'),
    editKudu: (id, newText) => set((state) => ({
        kudus: state.kudus.map((kudu) => (kudu.id === id ? { ...kudu, text: newText } : kudu)),
    }), false, 'editKudu'),
})));

export default useKuduStore;
