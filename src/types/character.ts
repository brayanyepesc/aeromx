export enum CharacterStatus {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown"
}

export enum CharacterGender {
  FEMALE = "Female",
  MALE = "Male",
  GENDERLESS = "Genderless",
  UNKNOWN = "unknown"
}

export interface CharacterLocation {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: CharacterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
  url: string
  created: string
}

export interface ApiResponse<T> {
  data: T
  status: number
  statusMessage: string
} 