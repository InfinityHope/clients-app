import { useFormValues } from '@/hooks/useForm'
import { DeleteIcon } from '@chakra-ui/icons'
import {
	Box,
	FormControl,
	Input,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr
} from '@chakra-ui/react'
import { Controller, useFieldArray } from 'react-hook-form'

const MetaForm = () => {
	const { control } = useFormValues()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'metadata'
	})

	return (
		<Box>
			<TableContainer>
				<Table>
					<Thead>
						<Tr>
							<Th>Ключ</Th>
							<Th>Значение</Th>
							<Th></Th>
						</Tr>
					</Thead>
					<Tbody>
						{fields.map((item, index) => (
							<Tr key={item.id}>
								<Td>
									<Controller
										render={({ field: { onChange, value } }) => (
											<FormControl>
												<Input
													value={value}
													onChange={onChange}
													size='sm'
												/>
											</FormControl>
										)}
										name={`metadata.${index}.key`}
										control={control}
									/>
								</Td>
								<Td>
									<Controller
										render={({ field: { onChange, value } }) => (
											<FormControl>
												<Input
													value={value}
													onChange={onChange}
													size='sm'
												/>
											</FormControl>
										)}
										name={`metadata.${index}.prop`}
										control={control}
									/>
								</Td>
								<Td>
									<DeleteIcon cursor={'pointer'} onClick={() => remove(index)} />
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Text
				color={'blue.300'}
				_hover={{ color: 'red' }}
				cursor={'pointer'}
				textAlign={'right'}
				onClick={() => append({ key: '', prop: '' })}
			>
				Добавить еще ключ - значение
			</Text>
		</Box>
	)
}

export default MetaForm
