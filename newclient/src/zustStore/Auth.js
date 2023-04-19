import { create } from "zustand";

const useAuthStore = create((set) => ({
  userSignupStatus: false,
  userDialog:false,
  toggleDialog:()=>set((state)=>({userDialog:!state.userDialog})),
  toggleAuthDialogFalse:()=>((state)=>({userDialog:false})),
  toggleSignup: ()=>set((state) => ({ userSignupStatus: !state.userSignupStatus })),
  
}));

export default useAuthStore;
