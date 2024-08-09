
import { create } from "zustand"

const useBar = create(set => ({
    bar :[],
    setBars: (value) => set({bar: value})
}))

export {useBar}