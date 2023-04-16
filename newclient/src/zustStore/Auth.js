import { create } from "zustand";

const useAuthStore = create((set) => ({
  userSignupStatus: false,
  toggleSignup: ()=>set((state) => ({ userSignupStatus: !state.userSignupStatus })),
}));

export default useAuthStore;
