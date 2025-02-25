import React, { createContext, useContext, useState } from "react";

interface FavoritesContextType {
    favorites: string[];
    addFavorite: (caption: string) => void;
    removeFavorite: (caption: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (caption: string) => {
        setFavorites(prev => {
            if (!prev.includes(caption)) {
                return [...prev, caption];
            }
            return prev;
        });
    };

    const removeFavorite = (caption: string) => {
        setFavorites(prev => prev.filter(item => item !== caption));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}
