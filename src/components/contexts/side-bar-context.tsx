"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// تعریف نوع‌های مربوط به Context
interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

// ایجاد Context با مقدار پیش‌فرض
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// تعریف نوع‌های مربوط به Props
interface ISidebarProviderProps {
    children: React.ReactNode;
}

export const SidebarProvider = ({ children }: ISidebarProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

// هوک برای استفاده از Context
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};