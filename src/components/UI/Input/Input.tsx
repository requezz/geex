import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = "text",
    ...otherProps
  } = props;

  return (
    <div className={styles.CustomInputContainer}>
      <input
        className={classNames(styles.input, {}, [className])}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
};
