import ControlBar from '@/components/control-bar/ControlBar'
import CustomModal from '@/components/custom-modal/CustomModal'
import CustomSpinner from '@/components/custom-spinner/Spinner'
import UserTable from '@/components/customer-table/CustomersTable'
import Meta from '@/components/meta/Meta'
import { useCustomers } from '@/hooks/useCustomers'
import { Box, Heading, useDisclosure } from '@chakra-ui/react'

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const { customers, error, loading } = useCustomers()

	const noData = !customers && (
		<Heading as='h3' textAlign={'center'}>
			Данные отсутствуют
		</Heading>
	)

	const errorMessage = (
		<Heading as='h3' textAlign={'center'} color={'red'}>
			Ошибка при получении данных
		</Heading>
	)

	return (
		<>
			<Meta
				title='Client Table'
				description='Client table for monitoring and creating another users'
			/>
			<ControlBar onOpen={onOpen} />
			<Box mt={'1em'} p={'1em'}>
				{error && errorMessage}
				{loading && <CustomSpinner />}
				{customers && !loading && !error ? <UserTable customers={customers} /> : noData}
			</Box>
			<CustomModal onClose={onClose} isOpen={isOpen} />
		</>
	)
}
