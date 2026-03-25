import { useState, useEffect, type ReactNode } from "react";
import axios, { type AxiosResponse } from "axios";
import { UserContext } from "./UserContext";
import type { UserI } from "../types/user.types";
import type { ApiResponse } from "../types/api.types";

const UserDetails = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<ApiResponse<UserI>> = await axios.get(
          "http://localhost:3000/api/user/me",
          { withCredentials: true }
        );
        setUser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDetails;