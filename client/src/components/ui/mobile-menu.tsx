import * as React from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ className, isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mobile-menu fixed top-0 right-0 h-full w-80 bg-warm-bg shadow-xl z-50 p-6",
        isOpen && "open",
        className
      )}
      {...props}
    />
  )
);

MobileMenu.displayName = "MobileMenu";

export { MobileMenu };
