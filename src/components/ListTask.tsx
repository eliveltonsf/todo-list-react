import { ListTaskProps, UpdateTaskProps } from "../types/task";
import Task from "./Task";

const ListTask = ({
  dataList,
  totalPages,
  onUpdateTask,
  onRemoveTask,
}: ListTaskProps) => {
  const sendCheckedTask = (checkedTask: UpdateTaskProps) => {
    onUpdateTask(checkedTask);
  };

  const sendDeleteTask = async (id: string) => {
    onRemoveTask(id);
  };

  return (
    <div className="flex flex-col h-auto justify-start">
      <ul className="md:max-w-7xl  list-none flex flex-col w-full">
        {dataList.map((task) => {
          return (
            <li key={task.id} className="w-full">
              <div className="flex w-full h-auto gap-3 flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-2 w-full">
                  <Task
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    onCheck={sendCheckedTask}
                  />
                </div>
                <div className="flex w-full md:w-auto justify-center items-center h-auto">
                  <button
                    onClick={() => sendDeleteTask(String(task.id))}
                    className="flex justify-center items-center w-full md:w-16 h-[3rem] px-0 text-white cursor-pointer border-none rounded-lg bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListTask;
