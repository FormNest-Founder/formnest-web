import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const button = cva(
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                primary:
                "bg-[--color-primary] text-white hover:bg-blue-600 focus:ring-[--color-primary]",
                secondary:
                "bg-transparent border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary]/10",
                disabled:
                "bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none",
            },
            size: {
                sm: "px-3 py-1.5 text-sm rounded-[--radius-sm]",
                md: "px-4 py-2 text-base rounded-[--radius-md]",
                lg: "px-5 py-3 text-lg rounded-[--radius-lg]",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof button>;

export default function Button({
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <button className={clsx(button({ variant, size }), className)} {...props} />
    );
}
