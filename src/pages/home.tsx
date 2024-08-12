import { zodResolver } from "@hookform/resolvers/zod";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Header } from "../components/Header";
import { TextInput } from "../components/Input";
import api from "../services/api";
import createTaskFormSchema from "../util/createTaskFormSchema";

export default function Home() {
  const schema = createTaskFormSchema();
  type CreateTaskFormState = z.infer<typeof schema>;

  const [taskFormData, setTaskFormData] = useState<CreateTaskFormState>(
    {} as CreateTaskFormState
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateTaskFormState>({
    resolver: zodResolver(schema),
  });

  const handleTaskData = async () => {
    const data = {
      title: taskFormData.title,
      description: taskFormData.description,
      status: false,
    };

    await api
      .post("api/task", data)
      .then((response) => {
        console.log(response);
        setValue("title", "");
        setValue("description", "");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e: SyntheticEvent<EventTarget>) => {
    setTaskFormData({
      ...taskFormData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  return (
    <main className="flex justify-center items-center overflow-scroll">
      <div className="max-w-7xl h-svh w-full after:contents-[''] after:table after:clear-both p-3 ">
        <Header user="Elivelton" />

        <div className="h-auto w-full backdrop:blur-sm flex flex-col rounded-lg my-3 flex-wrap mb-6">
          <div className="flex flex-wrap gap-2">
            <form
              onSubmit={handleSubmit(handleTaskData)}
              className="flex flex-1 gap-3 flex-wrap md:flex-nowrap"
              autoComplete="off"
            >
              <TextInput
                type="text"
                name="title"
                placeholderText="Digite o titulo da tarefa"
                defaultValue={taskFormData.title}
                onChange={handleInputChange}
                register={register}
                errorsLabel={errors.title?.message}
                autoComplete="off"
              />
              <TextInput
                type="text"
                name="description"
                placeholderText="Digite a descrição da tarefa"
                defaultValue={taskFormData.description}
                onChange={handleInputChange}
                register={register}
                errorsLabel={errors.description?.message}
                autoComplete="off"
              />

              <button className="flex justify-center items-center w-full md:w-16 p-3 text-white cursor-pointer border-none rounded-lg bg-blue-400 max-h-[50px]">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
