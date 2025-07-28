import { Character } from "rickmortyapi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import CharacterCard from "./CharacterCard";
import styles from "./CharacterList.module.css";

interface CharacterListProps {
  characters: Character[];
  selectedCharacter: Character | null;
  likedCharacters: number[];
  onSelectCharacter: (character: Character) => void;
  onLikeCharacter: (characterId: number) => void;
  loading: boolean;
}

export default function CharacterList({
  characters,
  selectedCharacter,
  likedCharacters,
  onSelectCharacter,
  onLikeCharacter,
  loading
}: CharacterListProps) {
  const handleScrollUp = () => {
    const grid = document.querySelector(`.${styles.charactersGrid}`) as HTMLElement;
    if (grid) {
      grid.scrollTop -= 100;
    }
  };

  const handleScrollDown = () => {
    const grid = document.querySelector(`.${styles.charactersGrid}`) as HTMLElement;
    if (grid) {
      grid.scrollTop += 100;
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.charactersGrid}>
        {characters.slice(0, 4).map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={selectedCharacter?.id === character.id}
            onSelect={onSelectCharacter}
            onLike={onLikeCharacter}
            isLiked={likedCharacters.includes(character.id)}
          />
        ))}
      </div>
      <div className={styles.scrollButtons}>
        <button className={styles.scrollButton} onClick={handleScrollUp}>
          <FaChevronUp size={16} />
        </button>
        <button className={styles.scrollButton} onClick={handleScrollDown}>
          <FaChevronDown size={16} />
        </button>
      </div>
    </div>
  );
} 