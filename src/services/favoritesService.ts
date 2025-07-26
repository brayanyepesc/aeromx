import { Character } from '../types/character'

export class FavoritesService {
  static validateCharacter(character: Character): boolean {
    return character && 
           typeof character.id === 'number' && 
           character.id > 0 &&
           typeof character.name === 'string' &&
           character.name.trim().length > 0
  }

  static isDuplicate(favorites: Character[], characterId: number): boolean {
    return favorites.some(fav => fav.id === characterId)
  }

  static addFavorite(favorites: Character[], character: Character): Character[] {
    if (!this.validateCharacter(character)) {
      throw new Error('Invalid character data')
    }

    if (this.isDuplicate(favorites, character.id)) {
      return favorites
    }

    return [...favorites, character]
  }

  static removeFavorite(favorites: Character[], characterId: number): Character[] {
    return favorites.filter(fav => fav.id !== characterId)
  }

  static isFavorite(favorites: Character[], characterId: number): boolean {
    return favorites.some(fav => fav.id === characterId)
  }

  static getFavoritesCount(favorites: Character[]): number {
    return favorites.length
  }
} 