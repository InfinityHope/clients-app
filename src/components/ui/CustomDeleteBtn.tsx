import { Button } from '@chakra-ui/react'
import { FC } from 'react'

interface ICustomDeleteBtn {
	removeFunc: () => void
}

const CustomDeleteBtn: FC<ICustomDeleteBtn> = ({ removeFunc }) => {
	return (
		<Button onClick={removeFunc} border={'dotted'} ml={'1em'} borderColor={'red'} size={'sm'}>
			Удалить
		</Button>
	)
}

export default CustomDeleteBtn
