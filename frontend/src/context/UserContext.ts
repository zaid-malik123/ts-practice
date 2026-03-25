import { createContext } from "react";
import type { UserI } from "../types/user.types";

interface UserContextI {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}

export const UserContext = createContext<UserContextI | null>(null);