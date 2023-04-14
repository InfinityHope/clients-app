import { useSearch } from '@/hooks/useSearch'
import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement, useMediaQuery } from '@chakra-ui/react'

import { KeyboardEvent, useState } from 'react'

const SearchBar = () => {
	const [isLargerThan530] = useMediaQuery('(min-width: 530px)')
	const { setSearchTerm } = useSearch()
	const [value, setValue] = useState<string>('')

	const onSearchHandler = () => {
		setSearchTerm(value)
	}

	return (
		<InputGroup size='md' w={!isLargerThan530 ? '100%' : '40%'}>
			<Input
				value={value}
				onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
					if (e.code === 'Enter') {
						onSearchHandler()
					}
				}}
				onChange={e => setValue(e.target.value)}
				pr='4.5rem'
				placeholder='Поиск'
			/>
			<InputRightElement width='4.5rem'>
				<Button onClick={onSearchHandler} h='1.75rem' size='sm'>
					<SearchIcon />
				</Button>
			</InputRightElement>
		</InputGroup>
	)
}

export default SearchBar
