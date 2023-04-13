import CustomerProvider from '@/providers/customer-provider/CustomerProvider'
import FormProvider from '@/providers/form-provider/FormProvider'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<CustomerProvider>
				<FormProvider>
					<Component {...pageProps} />
				</FormProvider>
			</CustomerProvider>
		</ChakraProvider>
	)
}
