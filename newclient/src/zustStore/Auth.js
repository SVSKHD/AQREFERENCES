import { create } from "zustand";

const useAuthStore = create((set) => ({
  DialogDefault:false,
  userSignupStatus: false,
  userDialog:false,
  toggleDialog:()=>set((state)=>({userDialog:!state.userDialog})),
  toggleSignup: ()=>set((state) => ({ userSignupStatus: !state.userSignupStatus })),
  toggleDialogFalse:()=>set((state)=>({userDialog:state.DialogDefault}))
}));

export default useAuthStore;
