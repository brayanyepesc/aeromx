import { Character } from "rickmortyapi";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getFirstName } from "../../utils/stringUtils";
import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onSelect: (character: Character) => void;
  onLike: (characterId: number) => void;
  isLiked: boolean;
}

export default function CharacterCard({ 
  character, 
  isSelected, 
  onSelect, 
  onLike, 
  isLiked 
}: CharacterCardProps) {
  return (
    <div 
      className={`${styles.characterCard} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(character)}
    >
      <div className={styles.characterName}>
        {getFirstName(character.name).toUpperCase()}
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src={character.image} 
          alt={character.name}
          fill
          className={styles.characterImage}
        />
      </div>
      <div 
        className={styles.likeButton}
        onClick={(e) => {
          e.stopPropagation();
          onLike(character.id);
        }}
      >
        {isLiked ? (
          <FaHeart className={`${styles.heartIcon} ${styles.liked}`} />
        ) : (
          <FaRegHeart className={styles.heartIcon} />
        )}
        <span>Like</span>
      </div>
    </div>
  );
} 