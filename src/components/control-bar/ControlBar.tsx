import { SmallAddIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import SearchBar from './search-bar/SearchBar'

interface IControlBar {
	onOpen: () => void
}

const ControlBar: FC<IControlBar> = ({ onOpen }) => (
	<Flex justifyContent={'space-between'} p={'.6em'}>
		<Heading as={'h2'}>Клиенты</Heading>
		<Flex justifyContent={'space-between'} w={'30%'}>
			<SearchBar />
			<Button onClick={onOpen} leftIcon={<SmallAddIcon />}>
				Добавить клиента
			</Button>
		</Flex>
	</Flex>
)

export default ControlBar
