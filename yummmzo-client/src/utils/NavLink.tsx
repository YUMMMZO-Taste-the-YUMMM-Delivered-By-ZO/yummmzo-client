import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  function NavLinkComponent(props, ref) {
    const { className, activeClassName, pendingClassName, ...restProps } = props;
    
    return (
      <RouterNavLink
        ref={ref}
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...restProps}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };