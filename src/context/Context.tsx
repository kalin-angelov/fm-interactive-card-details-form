import { createContext } from "react";

import { AppContextType } from "../types/appContextType";

export const Context = createContext<AppContextType | undefined>(undefined);