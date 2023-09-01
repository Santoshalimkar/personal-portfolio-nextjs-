'use client'
import React, { createContext, useState } from 'react';
import { ToggleSidebar } from './Sidebar';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const {toggle, setToggle}=ToggleSidebar()

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
