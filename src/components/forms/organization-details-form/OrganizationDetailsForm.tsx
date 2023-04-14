import CustomInput from '@/components/ui/CustomInput'
import { useFormValues } from '@/hooks/useForm'
import { Box } from '@chakra-ui/react'

const OrganizationDetailsForm = () => {
	const { control } = useFormValues()

	return (
		<Box>
			<CustomInput
				label='Название организации'
				required={{ value: true, message: 'Введите название организации' }}
				name={'org.name'}
				control={control}
			/>

			<CustomInput
				label='ИНН организации'
				required={{ value: true, message: 'Введите ИНН организации' }}
				name={'org.inn'}
				control={control}
			/>

			<CustomInput
				label='КПП организации'
				required={{ value: true, message: 'Введите КПП организации' }}
				name={'org.kpp'}
				control={control}
			/>

			<CustomInput
				label='ОГРН организации'
				required={{ value: true, message: 'Введите ОГРН организации' }}
				name={'org.ogrn'}
				control={control}
			/>

			<CustomInput
				label='Юридический адрес'
				required={{ value: true, message: 'Введите юридический адрес' }}
				name={'org.addr'}
				control={control}
			/>
		</Box>
	)
}

export default OrganizationDetailsForm
