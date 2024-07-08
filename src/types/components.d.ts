import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export type TextInputProps = {
  name: string;
  type: string;
  value?: string;
  register?: UseFormRegister;
  placeholderText: string;
} & InputHTMLAttributes<HTMLInputElement>;
