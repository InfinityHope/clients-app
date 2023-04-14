import CustomAddBtn from '@/components/ui/CustomAddBtn'
import CustomDeleteBtn from '@/components/ui/CustomDeleteBtn'
import CustomInput from '@/components/ui/CustomInput'
import { useFormValues } from '@/hooks/useForm'
import { Box, Divider, Flex } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useFieldArray } from 'react-hook-form'

const InvoicesEmailsForm = () => {
	const { control } = useFormValues()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'invoice_emails'
	})

	return (
		<Box>
			{fields.map((item, index) => (
				<Fragment key={item.id}>
					<Flex justifyContent={'space-between'} alignItems={'flex-end'} width={'100%'}>
						<Box width={'70%'}>
							<CustomInput
								control={control}
								name={`invoice_emails.${index}.value`}
								label={'Введите e-mail'}
								required={{ value: true, message: 'Введите e-mail' }}
							/>
						</Box>
						{index !== 0 && <CustomDeleteBtn removeFunc={() => remove(index)} />}
					</Flex>
					<Divider my={'.5em'} />
				</Fragment>
			))}
			<CustomAddBtn label='Добавить еще email' appendFunc={() => append({ value: '' })} />
		</Box>
	)
}

export default InvoicesEmailsForm
