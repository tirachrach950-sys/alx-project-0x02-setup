
// Existing interfaces
export interface ExampleInterface {
  message: string;
}

export interface CardProps {
  title: string;
  content: string;
}

// New interface for Button
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  title: string;
}
export interface PostProps {
  userId: number;
  id?: number; // optional if needed
  title: string;
  body: string;
}
