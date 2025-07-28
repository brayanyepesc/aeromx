import { getCharacters, getCharacter, Character } from 'rickmortyapi'

export interface CharactersResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export class CharacterApiService {
  static async getAllCharacters(page = 1) {
    try {
      const response = await getCharacters({ page })
      return response
    } catch (error) {
      throw new Error(`Error fetching characters: ${error}`)
    }
  }

  static async getCharacterById(id: number) {
    try {
      const response = await getCharacter(id)
      return response
    } catch (error) {
      throw new Error(`Error fetching character ${id}: ${error}`)
    }
  }

  static async searchCharacters(name: string) {
    try {
      const response = await getCharacters({ name })
      return response
    } catch (error) {
      throw new Error(`Error searching characters with name "${name}": ${error}`)
    }
  }

  static async getCharactersByStatus(status: string) {
    try {
      const response = await getCharacters({ status })
      return response
    } catch (error) {
      throw new Error(`Error fetching characters with status "${status}": ${error}`)
    }
  }

  static async getCharactersByGender(gender: string) {
    try {
      const response = await getCharacters({ gender })
      return response
    } catch (error) {
      throw new Error(`Error fetching characters with gender "${gender}": ${error}`)
    }
  }
} 