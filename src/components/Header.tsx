import { LogOut } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuth } from "../hooks/auth";
import { HeaderProps } from "../types/components";

export const Header = ({ user }: HeaderProps) => {
  const { methodSignOut } = useAuth();
  return (
    <header className="flex flex-row justify-between items-center flex-wrap gap-3">
      <img src={logo} alt="logo" className="h-20" />

      <div className="flex justify-center items-center md:items-end">
        <div className="flex flex-col items-center md:items-end">
          <h1 className="mx-2 text-3xl">Olá, {user}</h1>
          <span className="mx-2 text-base">
            Seja bem-vindo ao seu painel de tarefas.
          </span>
        </div>

        <button className="flex justify-center items-center w-full h-auto p-3 text-white cursor-pointer border-none rounded-lg pl-6 md:w-16">
          <LogOut
            size={22}
            className="text-gray-400 hover:text-red-500"
            onClick={methodSignOut}
          />
        </button>
      </div>
    </header>
  );
};
