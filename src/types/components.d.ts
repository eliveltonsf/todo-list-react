import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export type TextInputProps = {
  name: string;
  type: string;
  value?: string;
  register?: UseFormRegister;
  placeholderText: string;
  errorsLabel?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export interface HeaderProps {
  user: string;
}

export type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ToastProps = {
  success: true | false;
  title: string;
} & HTMLAttributes<HTMLDivElement>;
