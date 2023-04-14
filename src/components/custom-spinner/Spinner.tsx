import { Flex, Spinner } from '@chakra-ui/react'

const CustomSpinner = () => {
	return (
		<Flex justifyContent={'center'} alignItems={'center'}>
			<Spinner boxSize={'20em'} />
		</Flex>
	)
}

export default CustomSpinner
