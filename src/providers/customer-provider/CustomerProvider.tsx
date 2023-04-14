import { useSearch } from '@/hooks/useSearch'
import { ICustomer } from '@/models/Customer.interface'
import { CustomersService } from '@/services/customers-service/customers.service'
import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { IContext } from './customer-context.interface'

export const CustomerContext = createContext({} as IContext)

const CustomerProvider: FC<PropsWithChildren> = ({ children }) => {
	const [customers, setCustomers] = useState<ICustomer[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>('')
	const { searchTerm } = useSearch()

	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				const res = await CustomersService.getCustomers(searchTerm)
				setCustomers(res)
			} catch (error: unknown) {
				setError(error as string)
				setLoading(false)
			} finally {
				setLoading(false)
			}
		})()
	}, [searchTerm])

	return (
		<CustomerContext.Provider value={{ customers, setCustomers, loading, error }}>
			{children}
		</CustomerContext.Provider>
	)
}

export default CustomerProvider
