import Collapse from '@/components/collapse/Collapse'
import {
	BankAccountsForm,
	ClientDetailForm,
	InvoicesEmailsForm,
	OrganizationDetailsForm
} from '@/components/forms'
import { useCreateCustomer } from '@/hooks/useCreateCustomer'
import { useCustomToast } from '@/hooks/useCustomToast'
import { useCustomers } from '@/hooks/useCustomers'
import { useFormValues } from '@/hooks/useForm'
import { TCustomerFields } from '@/models/Customer.interface'
import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import MetaForm from '../forms/meta-form/MetaForm'

interface ICustomModal {
	isOpen: boolean
	onClose: () => void
}

const CustomModal: FC<ICustomModal> = ({ isOpen, onClose }) => {
	const { handleSubmit, reset } = useFormValues()
	const { setCustomers } = useCustomers()
	const { mutateError, mutateLoading, createCustomer } = useCreateCustomer()
	const createToast = useCustomToast()

	const onSubmit: SubmitHandler<TCustomerFields> = async data => {
		const newCustomer = {
			...data,
			invoice_emails: data.invoice_emails.map(email => email.value),
			metadata: data.metadata.map(({ key, prop }) => ({ [key]: prop }))
		}
		try {
			const res = await createCustomer(newCustomer)
			if (!mutateLoading && res) {
				setCustomers(prevState => [...prevState, res])
				onClose()
				reset()
				createToast('Успешно', `Пользователь создан!`, 'success')
			}
		} catch (error) {
			createToast(
				'Ошибка',
				`Произошла ошибка при создании пользователя! \n ${mutateError}`,
				'error'
			)
		}
	}

	return (
		<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Создание нового клиента</ModalHeader>
				<ModalCloseButton />
				<Box as='form' onSubmit={handleSubmit(onSubmit)}>
					<ModalBody pb={6}>
						<Collapse title='Детали клиента'>
							<ClientDetailForm />
						</Collapse>
						<Collapse title='Детали организации'>
							<OrganizationDetailsForm />
						</Collapse>
						<Collapse title='Банковские счета'>
							<BankAccountsForm />
						</Collapse>
						<Collapse title="Email's для счетов">
							<InvoicesEmailsForm />
						</Collapse>
						<Collapse title='Meta'>
							<MetaForm />
						</Collapse>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='blue' mr={3} type='submit'>
							Создать
						</Button>
					</ModalFooter>
				</Box>
			</ModalContent>
		</Modal>
	)
}
export default CustomModal
