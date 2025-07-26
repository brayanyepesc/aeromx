import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Character } from "rickmortyapi";
import { FavoritesService } from "../services/favoritesService";

interface FavoritesState {
  favorites: Character[];
}

interface FavoritesActions {
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
}

interface FavoritesSelectors {
  isFavorite: (id: number) => boolean;
  getFavoritesCount: () => number;
  getFavorites: () => Character[];
}

type FavoritesStore = FavoritesState & FavoritesActions & FavoritesSelectors;

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (character) => {
        try {
          const newFavorites = FavoritesService.addFavorite(
            get().favorites,
            character
          );
          set({ favorites: newFavorites });
        } catch (error) {
          console.error("Error adding favorite:", error);
        }
      },

      removeFavorite: (id) => {
        const newFavorites = FavoritesService.removeFavorite(
          get().favorites,
          id
        );
        set({ favorites: newFavorites });
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },

      isFavorite: (id) => {
        return FavoritesService.isFavorite(get().favorites, id);
      },

      getFavoritesCount: () => {
        return FavoritesService.getFavoritesCount(get().favorites);
      },

      getFavorites: () => {
        return get().favorites;
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
