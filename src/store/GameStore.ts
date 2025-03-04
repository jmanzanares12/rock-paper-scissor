import { create } from "zustand";
import { Answer } from "../types/Answer";

type GameState = {
    step: number;
    choise: Answer | null;
    setStep: (step: number) => void;
    setChoise: (choise: Answer) => void;
}

const useGameStore = create<GameState>((set) => ({
    step: 0,
    choise: null,
    setStep: (step: number) => set({ step }),
    setChoise: (choise: Answer) => set({ choise }),
}));

export default useGameStore;