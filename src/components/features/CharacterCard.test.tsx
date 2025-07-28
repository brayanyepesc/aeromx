import { Character } from 'rickmortyapi'

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
  location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
  image: 'test-image.jpg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z'
}

describe('CharacterCard Mock', () => {
  it('should have correct character data', () => {
    expect(mockCharacter.name).toBe('Rick Sanchez')
    expect(mockCharacter.status).toBe('Alive')
    expect(mockCharacter.id).toBe(1)
  })

  it('should have required character properties', () => {
    expect(mockCharacter).toHaveProperty('id')
    expect(mockCharacter).toHaveProperty('name')
    expect(mockCharacter).toHaveProperty('status')
    expect(mockCharacter).toHaveProperty('image')
  })
}) 