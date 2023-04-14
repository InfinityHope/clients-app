import { useCustomers } from '@/hooks/useCustomers'
import { SmallAddIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { FC } from 'react'
import ExportCsvBtn from '../export-csv-btn/ExportCsvBtn'
import SearchBar from './search-bar/SearchBar'

interface IControlBar {
	onOpen: () => void
}

const ControlBar: FC<IControlBar> = ({ onOpen }) => {
	const { customers } = useCustomers()
	const [isLargerThan530] = useMediaQuery('(min-width: 530px)')

	return (
		<Flex justifyContent={'space-between'} flexWrap={'wrap-reverse'} p={'.6em'}>
			<Heading mt={!isLargerThan530 ? '1em' : 0} as={'h2'}>
				Клиенты
			</Heading>
			<Flex justifyContent={'space-between'} flexWrap={'wrap'}>
				<SearchBar />
				<Flex mt={!isLargerThan530 ? '1em' : 0} ml={!isLargerThan530 ? 0 : '1em'}>
					<ExportCsvBtn csvData={customers} fileName={'customers-list'} />
					<Button ml={'1em'} onClick={onOpen} leftIcon={<SmallAddIcon />}>
						Добавить клиента
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ControlBar
