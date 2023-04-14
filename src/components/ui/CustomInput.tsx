import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

interface ICustomInput {
	control: any
	name: string
	required?: {
		value: boolean
		message: string
	}
	pattern?: {
		value: RegExp
		message: string
	}
	label?: string
}

const CustomInput: FC<ICustomInput> = ({ control, name, required, pattern, label }) => {
	return (
		<Controller
			rules={{
				required,
				pattern
			}}
			render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
				<FormControl isInvalid={invalid}>
					<FormLabel>{label}</FormLabel>
					<Input value={value} onChange={onChange} size='sm' />
					{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
				</FormControl>
			)}
			name={name}
			control={control}
		/>
	)
}

export default CustomInput
