import { create } from "zustand";
import type { QualificationData, QualificationStep } from "@/types";

interface QualificationModalState {
  isOpen: boolean;
  step: QualificationStep;
  data: QualificationData;
  open: () => void;
  close: () => void;
  goToStep: (step: QualificationStep) => void;
  next: () => void;
  back: () => void;
  setTipoNegocio: (value: QualificationData["tipoNegocio"]) => void;
  setVolumenMensual: (value: string) => void;
  setUrgencia: (value: string) => void;
  reset: () => void;
}

const initialData: QualificationData = {
  tipoNegocio: null,
  volumenMensual: null,
  urgencia: null,
};

export const useQualificationModal = create<QualificationModalState>((set, get) => ({
  isOpen: false,
  step: 1,
  data: initialData,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  goToStep: (step) => set({ step }),
  next: () => {
    const current = get().step;
    if (current < 3) set({ step: (current + 1) as QualificationStep });
  },
  back: () => {
    const current = get().step;
    if (current > 1) set({ step: (current - 1) as QualificationStep });
  },
  setTipoNegocio: (value) => set((s) => ({ data: { ...s.data, tipoNegocio: value } })),
  setVolumenMensual: (value) => set((s) => ({ data: { ...s.data, volumenMensual: value } })),
  setUrgencia: (value) => set((s) => ({ data: { ...s.data, urgencia: value } })),
  reset: () => set({ step: 1, data: initialData }),
}));
