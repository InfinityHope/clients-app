import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement, useMediaQuery } from '@chakra-ui/react'

const SearchBar = () => {
	const [isLargerThan530] = useMediaQuery('(min-width: 530px)')

	return (
		<InputGroup size='md' w={!isLargerThan530 ? '100%' : '40%'}>
			<Input pr='4.5rem' type={'search'} placeholder='Поиск' />
			<InputRightElement width='4.5rem'>
				<Button h='1.75rem' size='sm'>
					<SearchIcon />
				</Button>
			</InputRightElement>
		</InputGroup>
	)
}

export default SearchBar
