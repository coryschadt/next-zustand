import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools(set => ({
    dropdown: '',
    setDropdown: (dropdown) => set((state) => ({ dropdown })),
    modal: '',
    setModal: (modal) => set((state) => ({ modal })),
  }))
)


