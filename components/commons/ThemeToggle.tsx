"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setOpenSidebar } from "@/redux";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const dispatch = useAppDispatch();

  const handleToggler = (theme: string) => {
    setTheme(theme);
    //checking if its a mobile device, then closing the sidebar
    if (window.screen.width < 860) {
      dispatch(setOpenSidebar());
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleToggler("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleToggler("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleToggler("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
