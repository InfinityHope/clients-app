import { FC, PropsWithChildren, createContext, useState } from 'react'
import { IContext } from './search-context.interface'

export const SearchContext = createContext({} as IContext)

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchProvider
