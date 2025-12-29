import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium luxury CTA - Main conversion button with shine effect
        premium: "relative overflow-hidden bg-gradient-gold text-off-white font-bold uppercase tracking-[0.2em] rounded-full shadow-gold-lg hover:shadow-gold-xl hover:scale-[1.03] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-all before:duration-1000 before:ease-out",
        // Smaller premium variant
        "premium-sm": "relative overflow-hidden bg-gradient-gold text-off-white font-bold uppercase tracking-[0.15em] rounded-full shadow-gold hover:shadow-gold-lg hover:scale-[1.02] active:scale-[0.98]",
        // Gold outline variant
        "premium-outline": "relative border-2 border-gold bg-transparent text-gold font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-gold hover:text-off-white transition-all duration-500",
        // Dark premium variant
        "premium-dark": "relative overflow-hidden bg-gradient-premium text-off-white font-bold uppercase tracking-[0.15em] rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500",
        // Soft elegant variant
        elegant: "bg-champagne text-espresso font-medium rounded-full hover:bg-sand transition-all duration-500 hover:shadow-md",
        // White/light variant for dark backgrounds
        light: "bg-off-white text-primary font-semibold rounded-full hover:bg-off-white/90 transition-all duration-300",
      },
      size: {
        default: "h-11 px-5 py-2 text-sm",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        "2xl": "h-16 px-12 text-lg",
        "3xl": "h-[72px] px-14 text-xl",
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
