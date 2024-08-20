export interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: boolean;
  onCheck?: (checked: UpdateTaskProps) => void;
}

export interface UpdateTaskProps {
  id: number;
  status: boolean;
}

export interface ListTaskProps {
  dataList: TaskProps[];
  totalPages: number;
  onRemoveTask: (id: string) => void;
  onUpdateTask: (updateValue: UpdateTaskProps) => void;
}
