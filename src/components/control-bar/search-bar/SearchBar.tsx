import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

const SearchBar = () => {
	return (
		<InputGroup size="md" w={'50%'}>
			<Input pr="4.5rem" type={'search'} placeholder="Поиск" />
			<InputRightElement width="4.5rem">
				<Button h="1.75rem" size="sm">
					<SearchIcon />
				</Button>
			</InputRightElement>
		</InputGroup>
	)
}

export default SearchBar
