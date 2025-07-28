import { Character } from "rickmortyapi";
import Image from "next/image";
import { cleanOriginText } from "../../utils/stringUtils";
import styles from "./SelectedCharacter.module.css";

interface SelectedCharacterProps {
  character: Character | null;
}

export default function SelectedCharacter({ character }: SelectedCharacterProps) {
  if (!character) {
    return (
      <div className={styles.container}>
        <div className={styles.placeholder}>
          Selecciona un personaje
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.liveTag}>
        <div className={styles.liveDot}></div>
        <span>LIVE</span>
      </div>
      
      <div className={styles.characterImageContainer}>
        <Image 
          src={character.image} 
          alt={character.name}
          fill
          className={styles.characterImage}
          priority
        />
      </div>
      
      <div className={styles.characterDetails}>
        <h2 className={styles.characterName}>{character.name}</h2>
        <p className={styles.characterSpecies}>{character.species}</p>
        <p className={styles.characterSubtitle}>Rick&apos;s Toxic Side</p>
        
        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Origin</span>
            <span className={styles.detailValue}>{cleanOriginText(character.origin.name)}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>{cleanOriginText(character.location.name)}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Gender</span>
            <span className={styles.detailValue}>{character.gender}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Episodes</span>
            <span className={styles.detailValue}>{character.episode.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 