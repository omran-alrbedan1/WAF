import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-brand text-white hover:bg-brand-strong",
  secondary:
    "border border-line bg-transparent text-heading hover:border-brand-strong/70 hover:bg-chip",
  ghost:
    "border border-transparent bg-transparent text-body-strong hover:border-line hover:bg-chip hover:text-heading",
} as const;

const buttonSizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm",
} as const;

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

type ButtonClassNameOptions = {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function buttonClassName({
  className,
  size = "md",
  variant = "primary",
}: ButtonClassNameOptions = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );
}
