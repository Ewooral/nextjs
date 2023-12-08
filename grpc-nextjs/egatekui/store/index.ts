// // stores/index.ts
// import {create} from 'zustand';
// import createRegistrationSlice from './registrationSlice';

// const useCentralizedStore = create(set => ({
//   // @ts-ignore
//   ...createRegistrationSlice(set),
//   // Initialize more stores here
// }));



// export default useCentralizedStore;

// stores/index.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createRegistrationSlice, { RegistrationStore } from './registrationSlice';
import createFormSlice from './formSlice';
import { FormState, FormActions } from '@/types/formTypes';

interface State extends RegistrationStore {
  // Add more slices here

}
 // @ts-ignore

const useCentralizedStore = create<State & FormState & FormActions>(devtools(persist(set => ({
   // @ts-ignore
  ...createRegistrationSlice(set),
  // ...createFormSlice(set),
  // Initialize more slices here

  // @ts-ignore
}), { name: 'register' }
)))


export default useCentralizedStore;