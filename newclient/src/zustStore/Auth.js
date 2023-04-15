import { create } from 'zustand'

const useAuthStore = create((set)=>({
    userSignupstatus:false
}))

export default useAuthStore