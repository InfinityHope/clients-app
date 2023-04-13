import { useCustomToast } from '@/hooks/useCustomToast'
import { ICustomer } from '@/models/Customer.interface'
import { convertDate } from '@/utils/convertDate'
import { CopyIcon } from '@chakra-ui/icons'
import { Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { FC } from 'react'

interface ICustomerTable {
	customers: ICustomer[]
}

const UserTable: FC<ICustomerTable> = ({ customers }) => {
	const createToast = useCustomToast()

	const copyIdHandler = async (id: string) => {
		try {
			await navigator.clipboard.writeText(id)
			createToast('Успешно', `ID: "${id}" успешно скопирован`, 'success')
		} catch {
			createToast('Ошибка', `Что то пошло не так`, 'error')
		}
	}

	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>
							<Checkbox />
						</Th>
						<Th>Имя</Th>
						<Th>ID</Th>
						<Th>Email</Th>
						<Th>Отсрочка оплаты</Th>
						<Th>Создан</Th>
						<Th>Изменен</Th>
					</Tr>
				</Thead>
				<Tbody>
					{customers.map(customer => (
						<Tr key={customer.id}>
							<Td width={'5%'}>
								<Checkbox />
							</Td>
							<Td width={'25%'}>{customer.name}</Td>
							<Td width={'15%'}>
								{customer.id}
								<CopyIcon
									ml={'.5em'}
									cursor={'pointer'}
									onClick={() => copyIdHandler(customer.id)}
								/>
							</Td>
							<Td width={'30%'}>{customer.email}</Td>
							<Td width={'5%'}>{customer.deferral_days} дней</Td>
							<Td width={'5%'}>{convertDate(customer.created_at)}</Td>
							<Td width={'5%'}>{convertDate(customer.updated_at)}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default UserTable
