// react
import { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useState } from "react";
import { user } from "../types/user.type";

type AuthContextType = {
     user: user;
     setUser: Dispatch<SetStateAction<user>>;
};

const userInitialValue: user = {
     name: '',
     email: '',
     isLogged: false
}

const AuthContext = createContext<AuthContextType>({
     user: userInitialValue,
     setUser: () => { }
});

function useAuth(): AuthContextType {
     const context = useContext(AuthContext);
     try {
          if (!context) {
               throw new Error("useAuth must be used within an AuthProvider");
          }
     } catch (error) {

     }
     return context;
}

const AuthProvider = (props: { children: ReactNode }): ReactElement => {
     const [user, setUser] = useState<user>({} as user);
     return <AuthContext.Provider {...props} value={{ user, setUser }} />;
};

export { AuthProvider, useAuth };