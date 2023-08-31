'use client'
import React, { createContext, useState } from 'react';
import { toggleSidebar } from './Sidebar';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const {toggle, setToggle}=toggleSidebar()

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
