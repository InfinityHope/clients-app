import { Dispatch, SetStateAction } from 'react'

export interface IContext {
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
}
