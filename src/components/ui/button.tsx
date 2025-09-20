import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        outline: "border border-white/30 bg-white/20 backdrop-blur-sm text-foreground hover:bg-white/30 rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl shadow-lg hover:shadow-xl",
        ghost: "hover:bg-white/20 hover:text-foreground rounded-xl backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "backdrop-blur-md bg-white/20 border border-white/30 text-gray-800 hover:bg-white/30 rounded-xl shadow-lg hover:shadow-xl",
        hero: "backdrop-blur-md bg-gradient-to-r from-primary to-secondary text-gray-800 hover:from-primary-glow hover:to-secondary-glow rounded-xl shadow-lg hover:shadow-2xl glow-primary",
        eco: "bg-gradient-to-r from-primary to-accent text-white hover:from-primary-glow hover:to-accent-glow rounded-xl shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 rounded-lg",
        lg: "h-14 px-8 py-4 text-base rounded-xl",
        icon: "h-12 w-12 rounded-xl",
        hero: "h-16 px-10 py-4 text-lg rounded-xl",
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
