import CustomAddBtn from '@/components/ui/CustomAddBtn'
import CustomDeleteBtn from '@/components/ui/CustomDeleteBtn'
import CustomInput from '@/components/ui/CustomInput'
import CustomSwitch from '@/components/ui/CustomSwitch'
import { useFormValues } from '@/hooks/useForm'
import { uid } from '@/utils/uid'
import { Box, Divider, Flex } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useFieldArray } from 'react-hook-form'

const BankAccountsForm = () => {
	const { control, setValue } = useFormValues()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'org.bank_accounts'
	})

	const appendForm = () =>
		append({
			id: uid(),
			name: '',
			account_number: '',
			bik: '',
			corr_account_number: '',
			is_default: false
		})

	const removeForm = (index: number) => {
		remove(index)
		setValue(`org.bank_accounts.${0}.is_default`, true)
	}

	const switchHandler = (item: Record<'id', string>) => {
		setValue(`org.bank_accounts`, [
			...fields.map(field =>
				field.id === item.id
					? { ...field, is_default: true }
					: { ...field, is_default: false }
			)
		])
	}

	return (
		<Box>
			{fields.map((item, index) => (
				<Fragment key={item.id}>
					<Flex justifyContent={'space-between'}>
						<Box width={'70%'}>
							<CustomInput
								control={control}
								name={`org.bank_accounts.${index}.name`}
								label={'Название счета'}
								required={{ value: true, message: 'Введите название счета' }}
							/>

							<CustomInput
								control={control}
								name={`org.bank_accounts.${index}.name`}
								label={'Номер счета'}
								required={{ value: true, message: 'Введите номер счета' }}
							/>

							<CustomInput
								control={control}
								name={`org.bank_accounts.${index}.name`}
								label={'БИК счета'}
								required={{ value: true, message: 'Введите БИК счета' }}
							/>

							<CustomInput
								control={control}
								name={`org.bank_accounts.${index}.name`}
								label={'Корр. номер счета'}
								required={{ value: true, message: 'Введите Корр. номер счета' }}
							/>

							<CustomSwitch
								name={`org.bank_accounts.${0}.is_default`}
								control={control}
								onChange={() => switchHandler(item)}
								label={'Дефолтный счет'}
							/>
						</Box>
						{index !== 0 && <CustomDeleteBtn removeFunc={() => removeForm(index)} />}
					</Flex>
					<Divider my={'.5em'} />
				</Fragment>
			))}
			<CustomAddBtn label='Добавить еще счет' appendFunc={appendForm} />
		</Box>
	)
}

export default BankAccountsForm
