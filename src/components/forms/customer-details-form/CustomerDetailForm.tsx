import CustomInput from '@/components/ui/CustomInput'
import { emailRegex, numRegex } from '@/constants/regex.constants'
import { useFormValues } from '@/hooks/useForm'
import { Box } from '@chakra-ui/react'

const ClientDetailForm = () => {
	const { control } = useFormValues()

	return (
		<Box>
			<CustomInput
				label='Имя'
				required={{ value: true, message: 'Введите имя' }}
				name={'name'}
				control={control}
			/>
			<CustomInput
				label='E-mail'
				required={{ value: true, message: 'Введите E-mail' }}
				pattern={{ value: emailRegex, message: 'Некорректный e-mail' }}
				name={'email'}
				control={control}
			/>
			<CustomInput
				label='Кол-во дней отсрочки'
				pattern={{
					value: numRegex,
					message: 'Дней отсрочки должно быть больше или равно 0'
				}}
				name={'deferral_days'}
				control={control}
			/>
			<CustomInput
				label='Кредитный лимит'
				pattern={{
					value: numRegex,
					message: 'Кредитный лимит должен быть больше или равен 0'
				}}
				name={'balance.credit_limit'}
				control={control}
			/>
		</Box>
	)
}

export default ClientDetailForm
