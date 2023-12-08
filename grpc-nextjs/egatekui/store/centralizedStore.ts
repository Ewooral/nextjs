// store.js
import {create} from 'zustand';
type Data = {
    [key: string]: any;
    step: number;
    };


const useStore = create<Data>(set => ({
  step: 0,
  data: {},
  setStep: (step: any) => set({ step }),
  setData: (key: any, value: any) => set(state => ({ data: { ...state.data, [key]: value } })),
}));

export const useStep = () => {
  const { step, setStep } = useStore();
  return { step, setStep };
};

export const useData = () => {
  const { data, setData } = useStore();
  return { data, setData };
};

export default useStore;