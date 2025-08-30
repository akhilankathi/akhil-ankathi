import { create } from "zustand"
import type { Experience } from "../models"


const initialState = {
  isLoaing: true,
  experianceList: [],
  error: ''
}

export const useExperaince = create((set) => ({
  ...initialState,
  setExperianceList: (experianceList: Experience[]) => set(() => ({
    experianceList: experianceList
  })),
  resetExperianceStore: () => set((state: any) => ({
    experianceList: []
  }))
}))