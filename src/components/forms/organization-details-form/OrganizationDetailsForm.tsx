import { useFormValues } from '@/hooks/useForm'
import { Box, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const OrganizationDetailsForm = () => {
	const { control } = useFormValues()

	return (
		<Box>
			<Controller
				rules={{
					required: {
						value: true,
						message: 'Введите название организации'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>Название организации</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'org.name'}
				control={control}
			/>

			<Controller
				rules={{
					required: {
						value: true,
						message: 'Введите ИНН организации'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>ИНН организации</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'org.inn'}
				control={control}
			/>

			<Controller
				rules={{
					required: {
						value: true,
						message: 'Введите КПП организации'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>КПП организации</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'org.kpp'}
				control={control}
			/>

			<Controller
				rules={{
					required: {
						value: true,
						message: 'Введите ОГРН организации'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>ОГРН организации</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'org.ogrn'}
				control={control}
			/>

			<Controller
				rules={{
					required: {
						value: true,
						message: 'Введите юридический адрес'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
					<FormControl isInvalid={invalid}>
						<FormLabel>Юридический адрес</FormLabel>
						<Input value={value} onChange={onChange} size='sm' />
						{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
					</FormControl>
				)}
				name={'org.addr'}
				control={control}
			/>
		</Box>
	)
}

export default OrganizationDetailsForm
