import { useToast } from '@chakra-ui/react'

export const useCustomToast = () => {
	const toast = useToast()

	const createToast = (
		heading: string,
		text: string,
		status: 'success' | 'error' | 'warning'
	) => {
		return toast({
			title: heading,
			description: text,
			status: status,
			duration: 3000,
			isClosable: true,
			position: 'bottom-left'
		})
	}

	return createToast
}
