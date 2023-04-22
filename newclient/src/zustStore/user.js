import { create } from "zustand";

const useUserStore = create((set)=>({
    userData : {},
    toggleUserData : (data)=>set((state)=>({userData:data}))
}))

export default useUserStore