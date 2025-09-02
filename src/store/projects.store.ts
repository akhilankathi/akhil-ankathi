import { create } from "zustand"
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
  resetProjectsStore: () => set(() => ({
    projectsList: []
  }))
}))