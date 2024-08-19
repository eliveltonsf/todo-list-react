interface ListTaskProps {
  dataList: TaskProps[];
  totalPages: number;
}

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: boolean;
  onCheck?: (checked: UpdateTaskProps) => void;
}

interface UpdateTaskProps {
  id: number;
  status: boolean;
}

const ListTask = ({ dataList, totalPages }: ListTaskProps) => {
  return (
    <div className="flex flex-col h-auto justify-start">
      <ul className="md:max-w-7xl  list-none flex flex-col w-full">
        {dataList.map((task) => {
          return (
            <li key={task.id} className="w-full">
              <div className="flex w-full h-auto gap-3 flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-2 w-full">{task.title}</div>
                <div className="flex w-full md:w-auto justify-center items-center h-auto">
                  <button>Delete</button>
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
