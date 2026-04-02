"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ClientContextType {
  clientName: string;
  setClientName: (name: string) => void;
  isNameCaptured: boolean;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [clientName, setClientNameState] = useState('');
  const [isNameCaptured, setIsNameCaptured] = useState(false);

  // Load from session storage on mount
  useEffect(() => {
    const savedName = sessionStorage.getItem('ayalafuneral_client_name');
    if (savedName) {
      setClientNameState(savedName);
      setIsNameCaptured(true);
    }
  }, []);

  const setClientName = (name: string) => {
    setClientNameState(name);
    setIsNameCaptured(true);
    sessionStorage.setItem('ayalafuneral_client_name', name);
  };

  return (
    <ClientContext.Provider value={{ clientName, setClientName, isNameCaptured }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
}
