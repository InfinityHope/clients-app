import { ICustomer } from '@/models/Customer.interface'
import { CustomersService } from '@/services/customers-service/customers.service'
import { useState } from 'react'

export const useCreateCustomer = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	const createCustomer = async (formBody: Omit<ICustomer, 'id'>) => {
		try {
			setLoading(true)
			const res = await CustomersService.createCustomer(formBody)
			setLoading(false)
			return res
		} catch (error: unknown) {
			setError(error as string)
			setLoading(false)
		} finally {
			setLoading(false)
		}
	}

	return {
		createCustomer,
		mutateLoading: loading,
		mutateError: error
	}
}
