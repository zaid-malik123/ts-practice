// import axios from "axios";
// import React, { createContext, useEffect, useState, type ReactNode } from "react";
// import type {ResponseType} from "axios"
// import type { UserI } from "../types/user";

// interface IUserContext {
//   user: UserI | null;
//   setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
// }

// export const UserContext = createContext<IUserContext| null >();

// const UserDetails = ({ children }: {children: ReactNode}) => {
//   const [user, setUser] = useState<UserI | null >(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res:ResponseType<UserI> = await axios.get("http://localhost:3000/api/user/me", {
//           withCredentials: true,
//         });

//         setUser(res.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserDetails;

import axios, { type AxiosResponse } from "axios";
import React, { createContext, useEffect, useState, type ReactNode } from "react";
import type { UserI } from "../types/user.types";

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface IUserContext {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}

export const UserContext = createContext<IUserContext | null>(null);

const UserDetails = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<ApiResponse<UserI>> = await axios.get(
          "http://localhost:3000/api/user/me",
          {
            withCredentials: true,
          }
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
