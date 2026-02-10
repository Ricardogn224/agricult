import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick?: () => void;
}

export function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}: AnimatedButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={`relative overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="absolute inset-0 scale-0 group-active:scale-100 bg-white opacity-30 rounded-full transition-transform duration-500 origin-center"></div>
      </div>

      {/* Content */}
      <span className="relative">{children}</span>
    </Button>
  );
}
