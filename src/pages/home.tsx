import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress } from "@mui/material";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Header } from "../components/Header";
import { TextInput } from "../components/Input";
import ListTask, { TaskProps } from "../components/ListTask";
import api from "../services/api";
import { UpdateTaskProps } from "../types/task";
import createTaskFormSchema from "../util/createTaskFormSchema";

export default function Home() {
  const schema = createTaskFormSchema();
  type CreateTaskFormState = z.infer<typeof schema>;

  const [taskFormData, setTaskFormData] = useState<CreateTaskFormState>(
    {} as CreateTaskFormState
  );
  const [dataTasks, setDataTasks] = useState<TaskProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateTaskFormState>({
    resolver: zodResolver(schema),
  });

  const loadTaskData = useCallback(async () => {
    const task = await api.get(`api/task?offset=${currentPage}&limit=5`);

    const data: TaskProps[] = task?.data?.tasks.map((item: TaskProps) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        status: item.status,
      };
    });

    const totalPage = task.data.totalPages;

    setDataTasks(data);
    setTotalPage(totalPage);
  }, [currentPage]);

  useEffect(() => {
    loadTaskData();
  }, [loadTaskData]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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

  const updateTask = async (updateValue: UpdateTaskProps) => {
    const { id, status } = updateValue;
    try {
      await api.patch(`api/task/${id}`, {
        status,
      });
      loadTaskData();
    } catch (error) {
      console.log(error);
    }
  };

  const removeTask = async (id: string) => {
    try {
      await api.delete(`api/task/${id}`);
      loadTaskData();
    } catch (err) {
      console.log(err);
    }
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

        {loading ? (
          <CircularProgress />
        ) : (
          <ListTask
            dataList={dataTasks}
            totalPages={totalPage}
            onRemoveTask={removeTask}
            onUpdateTask={updateTask}
          />
        )}
      </div>
    </main>
  );
}
