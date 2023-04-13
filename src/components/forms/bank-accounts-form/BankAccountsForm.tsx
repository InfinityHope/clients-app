import { useFormValues } from '@/hooks/useForm'
import { uid } from '@/utils/uid'
import { AddIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Switch
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'

const BankAccountsForm = () => {
	const { control, setValue } = useFormValues()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'org.bank_accounts'
	})

	return (
		<Box>
			{fields.map((item, index) => (
				<Fragment key={item.id}>
					<Flex justifyContent={'space-between'}>
						<Box width={'70%'}>
							<Controller
								rules={{
									required: {
										value: true,
										message: 'Введите название счета'
									}
								}}
								render={({
									field: { onChange, value },
									fieldState: { invalid, error }
								}) => (
									<FormControl isInvalid={invalid}>
										<FormLabel>Название счета</FormLabel>
										<Input value={value} onChange={onChange} size='sm' />
										{error?.message && (
											<FormErrorMessage>{error.message}</FormErrorMessage>
										)}
									</FormControl>
								)}
								name={`org.bank_accounts.${index}.name`}
								control={control}
							/>

							<Controller
								rules={{
									required: {
										value: true,
										message: 'Введите номер счета'
									}
								}}
								render={({
									field: { onChange, value },
									fieldState: { invalid, error }
								}) => (
									<FormControl isInvalid={invalid}>
										<FormLabel>Номер счета</FormLabel>
										<Input value={value} onChange={onChange} size='sm' />
										{error?.message && (
											<FormErrorMessage>{error.message}</FormErrorMessage>
										)}
									</FormControl>
								)}
								name={`org.bank_accounts.${index}.account_number`}
								control={control}
							/>

							<Controller
								rules={{
									required: {
										value: true,
										message: 'Введите БИК счета'
									}
								}}
								render={({
									field: { onChange, value },
									fieldState: { invalid, error }
								}) => (
									<FormControl isInvalid={invalid}>
										<FormLabel>БИК счета</FormLabel>
										<Input value={value} onChange={onChange} size='sm' />
										{error?.message && (
											<FormErrorMessage>{error.message}</FormErrorMessage>
										)}
									</FormControl>
								)}
								name={`org.bank_accounts.${index}.bik`}
								control={control}
							/>

							<Controller
								rules={{
									required: {
										value: true,
										message: 'Введите Корр. номер счета'
									}
								}}
								render={({
									field: { onChange, value },
									fieldState: { invalid, error }
								}) => (
									<FormControl isInvalid={invalid}>
										<FormLabel>Корр. номер счета</FormLabel>
										<Input value={value} onChange={onChange} size='sm' />
										{error?.message && (
											<FormErrorMessage>{error.message}</FormErrorMessage>
										)}
									</FormControl>
								)}
								name={`org.bank_accounts.${index}.corr_account_number`}
								control={control}
							/>

							<Controller
								render={({ field: { onChange, value } }) => (
									<FormControl>
										<FormLabel>Дефолтный счет</FormLabel>
										<Switch
											isDisabled={value}
											isChecked={value}
											name={`org.bank_accounts.${index}.is_default`}
											onChange={() => {
												setValue(`org.bank_accounts`, [
													...fields.map(field =>
														field.id === item.id
															? { ...field, is_default: true }
															: { ...field, is_default: false }
													)
												])
											}}
										/>
									</FormControl>
								)}
								name={`org.bank_accounts.${index}.is_default`}
								control={control}
							/>
						</Box>
						{index !== 0 && (
							<Button
								onClick={() => {
									remove(index)
									setValue(`org.bank_accounts.${0}.is_default`, true)
								}}
								border={'dotted'}
								ml={'1em'}
								borderColor={'red'}
								size={'sm'}
							>
								Удалить
							</Button>
						)}
					</Flex>
					<Divider my={'.5em'} />
				</Fragment>
			))}

			<Button
				border={'dotted'}
				borderColor={'gray.200'}
				width={'100%'}
				mt={'.5em'}
				onClick={() =>
					append({
						id: uid(),
						name: '',
						account_number: '',
						bik: '',
						corr_account_number: '',
						is_default: false
					})
				}
				leftIcon={<AddIcon />}
			>
				Добавить еще счет
			</Button>
		</Box>
	)
}

export default BankAccountsForm
