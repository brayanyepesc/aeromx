"use client"

import { useState, useEffect } from "react";
import { Character } from "rickmortyapi";
import { useCharacters } from "../hooks/useCharacters";
import SearchBar from "../components/ui/SearchBar";
import CharacterList from "../components/ui/CharacterList";
import SelectedCharacter from "../components/ui/SelectedCharacter";
import styles from "./page.module.css";

export default function Home() {
  const { characters, loading, searchCharacters } = useCharacters();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [likedCharacters, setLikedCharacters] = useState<number[]>([]);

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
    setLikedCharacters(prev => 
      prev.includes(characterId) 
        ? prev.filter(id => id !== characterId)
        : [...prev, characterId]
    );
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
          likedCharacters={likedCharacters}
          onSelectCharacter={handleSelectCharacter}
          onLikeCharacter={handleLikeCharacter}
          loading={loading}
        />
        <button className={styles.favsButton}>FAVS</button>
      </div>
    </div>
  );
}
