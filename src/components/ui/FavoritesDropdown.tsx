import { FaTrash } from "react-icons/fa";
import { useFavoritesStore } from "../../store/favoritesStore";
import styles from "./FavoritesDropdown.module.css";

interface FavoritesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritesDropdown({ isOpen, onClose }: FavoritesDropdownProps) {
  const { getFavorites, removeFavorite } = useFavoritesStore();
  const favorites = getFavorites();

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.dropdown}>
        {favorites.length === 0 ? (
          <div className={styles.emptyState}>
            No items
          </div>
        ) : (
          favorites.map((character) => (
            <div key={character.id} className={styles.favoriteItem}>
              <span className={styles.characterName}>{character.name}</span>
              <button 
                className={styles.removeButton}
                onClick={() => removeFavorite(character.id)}
              >
                <FaTrash size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
} 