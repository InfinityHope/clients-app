import { useFormValues } from '@/hooks/useForm'
import { Box, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const ClientDetailForm = () => {
	const { control } = useFormValues()

	return (
		<Box>
			<Controller
				rules={{ required: { value: true, message: 'Введите имя' } }}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>Имя</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'name'}
				control={control}
			/>
			<Controller
				rules={{ required: { value: true, message: 'Введите E-mail' } }}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>E-mail</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'email'}
				control={control}
			/>
			<Controller
				rules={{
					pattern: {
						value: /^(0|[1-9]\d*)(\.\d+)?$/,
						message: 'Дней отсрочки должно быть больше или равно 0'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>Кол-во дней отсрочки</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'deferral_days'}
				control={control}
			/>
			<Controller
				rules={{
					pattern: {
						value: /^(0|[1-9]\d*)(\.\d+)?$/,
						message: 'Кредитный лимит должен быть больше или равен 0'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>Кредитный лимит</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'balance.credit_limit'}
				control={control}
			/>
		</Box>
	)
}

export default ClientDetailForm
