import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow-primary hover:shadow-glow-primary hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
        outline:
          "border border-primary/50 bg-transparent text-primary shadow-glow-primary hover:bg-primary/10 hover:shadow-glow-primary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-glow-secondary hover:shadow-glow-secondary hover:scale-105",
        ghost: 
          "text-primary hover:bg-primary/10 hover:text-primary-glow hover:shadow-glow-primary",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        neon:
          "bg-gradient-primary text-primary-foreground shadow-glow-primary hover:shadow-glow-primary hover:scale-110 hover:rotate-1 animate-glow-pulse",
        accent:
          "bg-accent text-accent-foreground shadow-glow-accent hover:shadow-glow-accent hover:scale-105",
        cyber:
          "relative bg-surface border-2 border-primary/30 text-primary overflow-hidden hover:border-primary hover:text-primary-glow hover:shadow-glow-primary before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 hover:before:opacity-10 before:transition-opacity",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean;
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(cyberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CyberButton.displayName = "CyberButton";

export { CyberButton, cyberButtonVariants };