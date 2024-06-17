import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <main className="flex flex-1 justify-center items-center w-full h-svh m-auto">
      <div className="flex flex-col justify-center items-center w-96 h-full">
        <div className="flex flex-col items-center justify-center mb-9 w-full">
          <h1 className="text-2xl uppercase font-bold text-blue-400 text-center">
            Cadastro de Usuário
          </h1>
        </div>
        <form className="p-3 flex flex-col gap-3 w-full" autoComplete="off">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="off"
          />

          <input
            type="name"
            name="name"
            placeholder="Nome"
            autoComplete="off"
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            autoComplete="off"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            autoComplete="off"
          />

          <button className="flex justify-center items-center outline-none border-none h-auto py-3 px-6 bg-blue-400 text-white rounded-lg w-full focus:outline-none">
            Cadastrar
          </button>
          <Link to="/" className="text-gray-400 text-center">
            Voltar
          </Link>
        </form>
      </div>
    </main>
  );
}
