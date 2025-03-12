import { create } from "zustand";
import { Answer } from "../types/answer";

type GameState = {
    step: number;
    choice: Answer | null;
    setStep: (step: number) => void;
    setChoise: (choice: Answer) => void;
}

const useGameStore = create<GameState>((set, get) => ({
    step: 0,
    choice: null,
    setStep: (step: number) => {
        if (get().step !== step) {
            set({ step });
        }
    }, 
    setChoise: (choice: Answer) => {
        if (get().choice !== choice) {
            set({ choice });
        }
    }
}));

export default useGameStore;