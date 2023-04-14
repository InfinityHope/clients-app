import ControlBar from '@/components/control-bar/ControlBar'
import CustomModal from '@/components/custom-modal/CustomModal'
import UserTable from '@/components/customer-table/CustomersTable'
import Meta from '@/components/meta/Meta'
import { useCustomers } from '@/hooks/useCustomers'
import { Box, Heading, useDisclosure } from '@chakra-ui/react'

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const { customers, error, loading } = useCustomers()

	return (
		<>
			<Meta
				title='Client Table'
				description='Client table for monitoring and creating another users'
			/>
			<ControlBar onOpen={onOpen} />
			<Box mt={'1em'} p={'1em'}>
				{error && (
					<Heading as='h3' textAlign={'center'} color={'red'}>
						Ошибка при получении данных
					</Heading>
				)}
				{loading && (
					<Heading as='h3' textAlign={'center'}>
						Загрузка...
					</Heading>
				)}
				{customers ? (
					<UserTable customers={customers} />
				) : (
					<Heading as='h3' textAlign={'center'}>
						Данные отсутствуют
					</Heading>
				)}
			</Box>
			<CustomModal onClose={onClose} isOpen={isOpen} />
		</>
	)
}
