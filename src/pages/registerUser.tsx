/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodResolver } from "@hookform/resolvers/zod";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { TextInput } from "../components/Input";
import api from "../services/api";
import { RegisterDataProps } from "../types/user";
import createUserFormSchema from "../util/createUserFormSchema";

export default function SingUp() {
  const schema = createUserFormSchema();
  type CreateUserFormSchema = z.infer<typeof schema>;

  const navigate = useNavigate();

  const [formData, setFormData] = useState<CreateUserFormSchema>(
    {} as CreateUserFormSchema
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(schema),
  });

  const handleInputChange = (e: SyntheticEvent<EventTarget>) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleUserData = async () => {
    const data: RegisterDataProps = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    // estado de loading true
    await api
      .post("api/user", data)
      .then((response) => {
        // estado de loading false
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // estado de loading false
      });
  };

  return (
    <main className="flex flex-1 justify-center items-center w-full h-svh m-auto">
      <div className="flex flex-col justify-center items-center w-96 h-full">
        <div className="flex flex-col items-center justify-center mb-9 w-full">
          <h1 className="text-2xl uppercase font-bold text-blue-400 text-center">
            Cadastro de Usuário
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(handleUserData)}
          className="p-3 flex flex-col gap-3 w-full"
          autoComplete="off"
        >
          <TextInput
            type="email"
            name="email"
            placeholderText="E-mail"
            autoComplete="off"
            register={register}
            onChange={handleInputChange}
            errorsLabel={errors.email?.message}
          />

          <TextInput
            type="text"
            name="name"
            placeholderText="Nome"
            autoComplete="off"
            register={register}
            onChange={handleInputChange}
            errorsLabel={errors.name?.message}
          />

          <TextInput
            type="password"
            name="password"
            placeholderText="Senha"
            autoComplete="off"
            register={register}
            onChange={handleInputChange}
            errorsLabel={errors.password?.message}
          />

          <TextInput
            type="password"
            name="confirmPassword"
            placeholderText="Confirme sua senha"
            autoComplete="off"
            register={register}
            onChange={handleInputChange}
            errorsLabel={errors.confirmPassword?.message}
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
