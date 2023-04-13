import { useFormValues } from '@/hooks/useForm'
import { AddIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'

const InvoicesEmailsForm = () => {
	const { control } = useFormValues()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'invoice_emails'
	})

	return (
		<Box>
			{fields.map((item, index) => {
				return (
					<Fragment key={item.id}>
						<Flex
							justifyContent={'space-between'}
							alignItems={'flex-end'}
							width={'100%'}
						>
							<Box width={'70%'}>
								<Controller
									rules={{
										required: {
											value: true,
											message: 'Введите e-mail'
										}
									}}
									render={({
										field: { onChange, value },
										fieldState: { invalid, error }
									}) => (
										<FormControl isInvalid={invalid}>
											<FormLabel>E-mail</FormLabel>
											<Input value={value} onChange={onChange} size='sm' />
											{error?.message && (
												<FormErrorMessage>{error.message}</FormErrorMessage>
											)}
										</FormControl>
									)}
									name={`invoice_emails.${index}.value`}
									control={control}
								/>
							</Box>
							{index !== 0 && (
								<Button
									onClick={() => remove(index)}
									border={'dotted'}
									borderColor={'red'}
									size={'sm'}
								>
									Удалить
								</Button>
							)}
						</Flex>
						<Divider my={'.5em'} />
					</Fragment>
				)
			})}

			<Button
				border={'dotted'}
				borderColor={'gray.200'}
				width={'100%'}
				leftIcon={<AddIcon />}
				onClick={() => append({ value: '' })}
			>
				Добавить еще email
			</Button>
		</Box>
	)
}

export default InvoicesEmailsForm
