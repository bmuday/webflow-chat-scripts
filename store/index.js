import { create } from "https://cdn.jsdelivr.net/npm/zustand@4.4.1/+esm";
console.log("create", create);

import userStore from "./user";
import errorStore from "./error";
import darkStore from "./dark";

export const useUserStore = create(userStore);
export const useErrorStore = create(errorStore);
export const useDarkStore = create(darkStore);
