import { useState, useEffect, useCallback } from 'react'
import { Character } from 'rickmortyapi'
import { CharacterApiService } from '../services/api'

interface UseCharactersState {
  characters: Character[]
  loading: boolean
  error: string | null
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

interface UseCharactersActions {
  fetchCharacters: (page?: number) => Promise<void>
  searchCharacters: (name: string) => Promise<void>
  filterByStatus: (status: string) => Promise<void>
  filterByGender: (gender: string) => Promise<void>
  resetFilters: () => Promise<void>
}

export const useCharacters = (): UseCharactersState & UseCharactersActions => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [hasPrevPage, setHasPrevPage] = useState(false)

  const fetchCharacters = useCallback(async (page = 1) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await CharacterApiService.getAllCharacters(page)
      const data = response.data
      
      setCharacters(data.results || [])
      setCurrentPage(page)
      setTotalPages(data.info?.pages || 0)
      setHasNextPage(!!data.info?.next)
      setHasPrevPage(!!data.info?.prev)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching characters')
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }, [])

  const searchCharacters = useCallback(async (name: string) => {
    if (!name.trim()) {
      await fetchCharacters(1)
      return
    }

    setLoading(true)
    setError(null)
    
    try {
      const response = await CharacterApiService.searchCharacters(name)
      const data = response.data
      
      setCharacters(data.results || [])
      setCurrentPage(1)
      setTotalPages(data.info?.pages || 0)
      setHasNextPage(!!data.info?.next)
      setHasPrevPage(!!data.info?.prev)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error searching characters')
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }, [fetchCharacters])

  const filterByStatus = useCallback(async (status: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await CharacterApiService.getCharactersByStatus(status)
      const data = response.data
      
      setCharacters(data.results || [])
      setCurrentPage(1)
      setTotalPages(data.info?.pages || 0)
      setHasNextPage(!!data.info?.next)
      setHasPrevPage(!!data.info?.prev)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error filtering by status')
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }, [])

  const filterByGender = useCallback(async (gender: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await CharacterApiService.getCharactersByGender(gender)
      const data = response.data
      
      setCharacters(data.results || [])
      setCurrentPage(1)
      setTotalPages(data.info?.pages || 0)
      setHasNextPage(!!data.info?.next)
      setHasPrevPage(!!data.info?.prev)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error filtering by gender')
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }, [])

  const resetFilters = useCallback(async () => {
    await fetchCharacters(1)
  }, [fetchCharacters])

  useEffect(() => {
    fetchCharacters(1)
  }, [fetchCharacters])

  return {
    characters,
    loading,
    error,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    fetchCharacters,
    searchCharacters,
    filterByStatus,
    filterByGender,
    resetFilters
  }
} 