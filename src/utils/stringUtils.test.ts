import { cleanOriginText, getFirstName } from './stringUtils'

describe('stringUtils', () => {
  describe('cleanOriginText', () => {
    it('should clean origin text', () => {
      expect(cleanOriginText('Earth (C-137)')).toBe('Earth')
      expect(cleanOriginText('Mars (Unknown)')).toBe('Mars')
    })

    it('should handle text without parentheses', () => {
      expect(cleanOriginText('Earth')).toBe('Earth')
    })
  })

  describe('getFirstName', () => {
    it('should get first name', () => {
      expect(getFirstName('Rick Sanchez')).toBe('Rick')
      expect(getFirstName('Morty Smith')).toBe('Morty')
    })

    it('should handle single name', () => {
      expect(getFirstName('Rick')).toBe('Rick')
    })
  })
}) 