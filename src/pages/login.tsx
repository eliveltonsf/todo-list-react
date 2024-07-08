/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodResolver } from "@hookform/resolvers/zod";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import logo from "../assets/logo.png";
import { TextInput } from "../components/Input";
import { LoginUserFormProps } from "../types/user";
import loginUserFormSchema from "../util/loginUserFormSchema";

export default function Login() {
  const schema = loginUserFormSchema();
  type LoginUserFormSchema = z.infer<typeof schema>;

  const [loginFormData, setLoginFormData] = useState<LoginUserFormProps>(
    {} as LoginUserFormProps
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormSchema>({
    resolver: zodResolver(schema),
  });

  const handleInputChange = (e: SyntheticEvent<EventTarget>) => {
    setLoginFormData({
      ...loginFormData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleLoginData = () => {};

  return (
    <main className="flex flex-1 justify-center items-center w-full h-svh m-auto">
      <div className="flex flex-col justify-center items-center w-96 h-full">
        <div className="flex flex-col items-center justify-center mb-9 w-full">
          <img src={logo} alt="logo" className="h-48" />
        </div>
        <form
          onSubmit={handleSubmit(handleLoginData)}
          className="p-3 flex flex-col gap-3 w-full"
          autoComplete="off"
        >
          <TextInput
            type="email"
            name="email"
            placeholderText="E-mail"
            autoComplete="off"
            onChange={handleInputChange}
            register={register}
          />
          <TextInput
            type="password"
            name="password"
            placeholderText="Senha"
            autoComplete="off"
            onChange={handleInputChange}
            register={register}
          />
          <button className="flex justify-center items-center outline-none border-none h-auto py-3 px-6 bg-blue-400 text-white rounded-lg w-full focus:outline-none">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
