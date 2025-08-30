import { create } from "zustand"
import { projects } from "../constants/Projects"
import type { Project } from "../models"


const initialState = {
    isLoaing : true,
    projectsList : [],
   error : ''
} 

export const useProjects = create((set) => ({
 ...initialState,
  getProjectsList : (projects : Project[])=> set(()=> ({
    projects: projects
  })),
  resetProjectsStore: () => set(()=>{
    initialState
  })
}))