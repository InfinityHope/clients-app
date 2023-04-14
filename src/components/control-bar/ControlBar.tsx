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

	const spreadCustomersForXLSX = () => {
		return customers.map(item => ({
			id: item.id,
			name: item.name,
			email: item.email,
			credit_limit: item.balance.credit_limit,
			deferral_days: item.deferral_days,
			currency: item.balance.currency,
			current_amount: item.balance.current_amount,
			available_amount: item.balance.available_amount,
			org_name: item.org.name,
			org_inn: item.org.inn,
			org_kpp: item.org.kpp,
			org_ogrn: item.org.ogrn,
			org_addr: item.org.addr,
			invoice_emails: item.invoice_emails.join(', '),
			status: item.status,
			created_at: item.created_at,
			updated_at: item.updated_at
		}))
	}

	return (
		<Flex justifyContent={'space-between'} flexWrap={'wrap-reverse'} p={'.6em'}>
			<Heading mt={!isLargerThan530 ? '1em' : 0} as={'h2'}>
				Клиенты
			</Heading>
			<Flex justifyContent={'space-between'} flexWrap={'wrap'}>
				<SearchBar />
				<Flex mt={!isLargerThan530 ? '1em' : 0} ml={!isLargerThan530 ? 0 : '1em'}>
					<Button onClick={() => console.log(spreadCustomersForXLSX())}>Click</Button>
					<ExportCsvBtn csvData={spreadCustomersForXLSX()} fileName={'customers-list'} />
					<Button ml={'1em'} onClick={onOpen} leftIcon={<SmallAddIcon />}>
						Добавить клиента
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ControlBar
