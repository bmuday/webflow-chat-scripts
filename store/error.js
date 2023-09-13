import { devtools, persist } from "zustand/middleware";

let errorStore = (set) => ({
  error: "err",
  setError: () => set((error) => ({ error })),
});

errorStore = devtools(errorStore);
errorStore = persist(errorStore, { name: "error" });

export default errorStore;
