import { SearchContext } from '@/providers/search-provider/SearchProvider'
import { useContext } from 'react'

export const useSearch = () => useContext(SearchContext)
