"use client"

import { useState, useEffect } from "react";
import { Character } from "rickmortyapi";
import { useCharacters } from "../hooks/useCharacters";
import { useFavoritesStore } from "../store/favoritesStore";
import SearchBar from "../components/ui/SearchBar";
import CharacterList from "../components/ui/CharacterList";
import SelectedCharacter from "../components/ui/SelectedCharacter";
import FavoritesDropdown from "../components/ui/FavoritesDropdown";
import styles from "./page.module.css";

export default function Home() {
  const { characters, loading, searchCharacters } = useCharacters();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    if (characters.length > 0 && !selectedCharacter) {
      setSelectedCharacter(characters[0]);
    }
  }, [characters, selectedCharacter]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    searchCharacters(value);
  };

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleLikeCharacter = (characterId: number) => {
    const character = characters.find(char => char.id === characterId);
    if (character) {
      if (isFavorite(characterId)) {
        removeFavorite(characterId);
      } else {
        addFavorite(character);
      }
    }
  };

  const handleFavoritesClick = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleCloseFavorites = () => {
    setIsFavoritesOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedSection}>
        <SelectedCharacter character={selectedCharacter} />
      </div>
      <div className={styles.listSection}>
        <SearchBar value={searchTerm} onChange={handleSearch} />
        <CharacterList
          characters={characters}
          selectedCharacter={selectedCharacter}
          onSelectCharacter={handleSelectCharacter}
          onLikeCharacter={handleLikeCharacter}
          loading={loading}
        />
        <div className={styles.favsContainer}>
          <button 
            className={`${styles.favsButton} ${isFavoritesOpen ? styles.favsButtonHover : ''}`}
            onClick={handleFavoritesClick}
          >
            FAVS
          </button>
          <FavoritesDropdown 
            isOpen={isFavoritesOpen} 
            onClose={handleCloseFavorites} 
          />
        </div>
      </div>
    </div>
  );
}
