import React, { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useState } from "react";
import { AuthProfile } from "../domain/entities/AuthProfile";

type AuthContextType = {
     authProfile: AuthProfile | null;
     setAuthProfile: Dispatch<SetStateAction<AuthProfile>>;
};

const AuthContext = createContext<AuthContextType>({
     authProfile: null,
     setAuthProfile: () => { }
});

function useAuth(): AuthContextType {
     const context = useContext(AuthContext);
     try {
          if (!context) {
               throw new Error("useAuth debe usarse dentro de un AuthProvider");
          }
     } catch (error) {

     }
     return context;
}

const AuthProvider = (props: { children: ReactNode }): ReactElement => {
     const [authProfile, setAuthProfile] = useState<AuthProfile>({} as AuthProfile);
     return <AuthContext.Provider {...props} value={{ authProfile, setAuthProfile }} />;
};

export { AuthProvider, useAuth };

