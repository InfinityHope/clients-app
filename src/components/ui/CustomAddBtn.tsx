import { AddIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { FC } from 'react'

interface ICustomAddBtn {
	appendFunc: () => void
	label: string
}

const CustomAddBtn: FC<ICustomAddBtn> = ({ appendFunc, label }) => {
	return (
		<Button
			border={'dotted'}
			borderColor={'gray.200'}
			width={'100%'}
			mt={'.5em'}
			onClick={appendFunc}
			leftIcon={<AddIcon />}
		>
			{label}
		</Button>
	)
}

export default CustomAddBtn
