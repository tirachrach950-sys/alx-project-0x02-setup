import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

export default function Button({ size, shape, title }: ButtonProps) {
  return (
    <button
      className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition`}
    >
      {title}
    </button>
  );
}

