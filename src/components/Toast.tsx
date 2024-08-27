import { CheckCircleOutline, Close, ErrorOutline } from "@mui/icons-material";
import { ToastProps } from "../types/components";

const Toast = (props: ToastProps) => {
  const { success, title, ...rest } = props;

  return (
    <div
      className={`w-auto ${
        success ? "bg-green-100" : "bg-red-100"
      } flex flex-1 items-center overflow-hidden absolute bottom-8 left-4 z-[999] p-2 rounded-lg`}
      {...rest}
    >
      <div className="flex w-full h-full relative">
        {success ? <CheckCircleOutline /> : <ErrorOutline />}
        <div className="w-full">
          <h2
            className={`w-full ${
              success ? "text-green-500" : "text-red-500"
            } text-base font-semibold mr-16`}
          >
            {title}
          </h2>
        </div>
        <Close />
      </div>
    </div>
  );
};

export default Toast;
