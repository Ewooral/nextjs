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
    kudus: [], // This is the initial state. At the beginning, your toy box is empty.

    addKudu: (kudu) => set((state) => ({
        kudus: [...state.kudus, kudu], // You tell your helper to add a new Kudu to the toy box.
    }), false, 'addKudu'),

    removeKudu: (id) => set((state) => ({
        kudus: state.kudus.filter((kudu) => kudu.id !== id), // You tell your helper to remove a Kudu by its ID.
    }), false, 'removeKudu'),

    updateKudu: (updatedKudu) => set((state) => ({
        kudus: state.kudus.map((kudu) => (kudu.id === updatedKudu.id ? updatedKudu : kudu)),
        // You tell your helper to update the information about a specific Kudu.
    }), false, 'updateKudu'),

    editKudu: (id, newText) => set((state) => ({
        kudus: state.kudus.map((kudu) => (kudu.id === id ? { ...kudu, text: newText } : kudu)),
        // You tell your helper to edit the text of a specific Kudu.
    }), false, 'editKudu'),
})));

export default useKuduStore;

/**
 * Alright, let's imagine you have a magical toy box (let's call it "KuduStore") that can store a list
 * of magical creatures called "Kudus." These Kudus have special properties like an ID, some text, and
 * whether they've completed their magical tasks or not.
 *
 * Now, you have a magical helper (let's call it set) who helps you manage this toy box. You can tell your
 * helper to add new Kudus, remove some Kudus, update the information about a Kudu, or edit the text of a Kudu.
 n simpler terms:

 addKudu: You ask your helper to add a new Kudu to the toy box.
 removeKudu: You ask your helper to remove a Kudu from the toy box using its ID.
 updateKudu: You ask your helper to update the information about a specific Kudu.
 editKudu: You ask your helper to change the text of a specific Kudu.

 The false and the strings like 'addKudu' are just some extra information for your helper to keep track of
 things better, like putting labels on your toy box sections so that your helper can organize them neatly.
 The devtools is like a magical spell that allows you to inspect and understand what's happening inside your
 toy box more easily.

 So, with this magical toy box and your helpful assistant, you can manage your collection of magical
 creatures effortlessly!
 */



