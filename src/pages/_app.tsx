import CustomerProvider from '@/providers/customer-provider/CustomerProvider'
import FormProvider from '@/providers/form-provider/FormProvider'
import SearchProvider from '@/providers/search-provider/SearchProvider'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<SearchProvider>
				<CustomerProvider>
					<FormProvider>
						<Component {...pageProps} />
					</FormProvider>
				</CustomerProvider>
			</SearchProvider>
		</ChakraProvider>
	)
}
