import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

interface ICustomSwitch {
	name: string
	control: any
	onChange: () => void
	label: string
}

const CustomSwitch: FC<ICustomSwitch> = ({ name, control, onChange, label }) => {
	return (
		<Controller
			render={({ field: { value } }) => (
				<FormControl>
					<FormLabel>{label}</FormLabel>
					<Switch isDisabled={value} isChecked={value} onChange={onChange} />
				</FormControl>
			)}
			name={name}
			control={control}
		/>
	)
}

export default CustomSwitch
