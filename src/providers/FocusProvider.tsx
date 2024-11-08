'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FocusContextType {
    focused: boolean;
    focusedId: number | null;
    setFocus: (id: number | null) => void;
}

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const FocusProvider = ({ children }: { children: ReactNode }) => {
    const [focused, setFocused] = useState(false);
    const [focusedId, setFocusedId] = useState<number | null>(null);

    const setFocus = (id: number | null) => {
        setFocused(id !== null); 
        setFocusedId(id);
    };

    return (
        <FocusContext.Provider value={{ focused, focusedId, setFocus }}>
            {children}
        </FocusContext.Provider>
    );
};

export const useFocusContext = () => {
    const context = useContext(FocusContext);
    if (!context) {
        throw new Error("useFocusContext must be used within a FocusProvider");
    }
    return context;
};
