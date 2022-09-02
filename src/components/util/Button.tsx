import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  title?: string;
  className?: string;
  icon?: ReactNode;
  titleClassname?: string;
}

export function ButtonComponent({
  title,
  className,
  icon,
  titleClassname,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={className}>
      {icon ? icon : null}
      <p className={titleClassname}>{title}</p>
    </button>
  );
}
