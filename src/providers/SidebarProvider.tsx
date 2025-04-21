"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 🔥 Define Sidebar States
type SidebarState = "focused" | "list" | "filter";

interface SidebarContextType {
  state: SidebarState;
  focusedId: number | null; // Only used when state is "focused"
  setSidebarState: (state: SidebarState, id?: number | null) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<SidebarState>("list");
  const [focusedId, setFocusedId] = useState<number | null>(null);

  const setSidebarState = (newState: SidebarState, id: number | null = null) => {
    setState(newState);
    setFocusedId(newState === "focused" ? id : null); // Only set ID when focused
  };

  return (
    <SidebarContext.Provider value={{ state, focusedId, setSidebarState }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};
