import { create } from "zustand"
import { projects } from "../constants/Projects"
import type { Project } from "../models"


const initialState = {
  isLoaing: true,
  projectsList: [],
  error: ''
}

export const useProjects = create((set) => ({
  ...initialState,
  setProjectsList: (projects: Project[]) => set(() => ({
    projectsList: projects
  })),
  resetProjectsStore: () => set((state: any) => ({
    projectsList: []
  }))
}))