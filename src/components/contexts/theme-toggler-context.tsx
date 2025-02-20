"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// تعریف نوع‌های مربوط به Context
interface ThemeContextType {
    isThemeDark: boolean;
    toggleTheme: () => void;
}

// ایجاد Context با مقدار پیش‌فرض
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// تعریف نوع‌های مربوط به Props
interface IThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
    const [isThemeDark, setIsThemeDark] = useState(true);

    const toggleTheme = () => {
        setIsThemeDark((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isThemeDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// هوک برای استفاده از Context
export const useThemeDark = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useThemeDark must be used within a ThemeProvider");
    }
    return context;
};