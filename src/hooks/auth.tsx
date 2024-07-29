import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import api from "../services/api";

interface SignInCredenctials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  name: string;
  methodSignIn(credentials: SignInCredenctials): void;
  methodSignOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  accessToken: string;
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@todo-list:token");
    const name = localStorage.getItem("@todo-list:name");

    if (accessToken && name) {
      return { accessToken, name };
    }

    return {} as AuthState;
  });

  const methodSignOut = useCallback(() => {
    localStorage.removeItem("@todo-list:token");
    localStorage.removeItem("@todo-list:name");
    setData({} as AuthState);
    window.location.reload();
  }, []);

  const methodSignIn = async (credentials: SignInCredenctials) => {
    const { email, password } = credentials;

    try {
      const response = await api.post("api/user/login", {
        email,
        password,
      });

      const { accessToken, name } = response.data;

      localStorage.setItem("@todo-list:token", accessToken);
      localStorage.setItem("@todo-list:name", name);
      setData({ accessToken, name });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: data.accessToken,
        name: data.name,
        methodSignIn,
        methodSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
