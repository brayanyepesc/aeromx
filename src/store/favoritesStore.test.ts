import { useFavoritesStore } from './favoritesStore'
import { Character } from 'rickmortyapi'

describe('Favorites Store', () => {
  beforeEach(() => {
    useFavoritesStore.getState().clearFavorites()
  })

  it('should add character to favorites', () => {
    const store = useFavoritesStore.getState()
    
    const character: Character = {
      id: 1,
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
      location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
      image: 'test.jpg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z'
    }
    
    store.addFavorite(character)
    const favorites = store.getFavorites()
    
    expect(favorites).toHaveLength(1)
    expect(favorites[0].id).toBe(1)
  })

  it('should remove character from favorites', () => {
    const store = useFavoritesStore.getState()
    
    const character: Character = {
      id: 1,
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
      location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
      image: 'test.jpg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z'
    }
    
    store.addFavorite(character)
    expect(store.getFavorites()).toHaveLength(1)
    
    store.removeFavorite(1)
    expect(store.getFavorites()).toHaveLength(0)
  })

  it('should check if character is favorite', () => {
    const store = useFavoritesStore.getState()
    
    const character: Character = {
      id: 1,
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
      location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
      image: 'test.jpg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z'
    }
    
    expect(store.isFavorite(1)).toBe(false)
    
    store.addFavorite(character)
    expect(store.isFavorite(1)).toBe(true)
  })
}) 