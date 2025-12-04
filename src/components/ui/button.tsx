import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        secondary: "bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-secondary hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        hero: "bg-foreground text-background border-2 border-foreground font-semibold hover:bg-transparent hover:text-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px]",
        heroOutline: "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
