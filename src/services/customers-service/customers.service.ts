import { axiosInstance } from '@/api/axios.instance'
import { ICustomer } from '@/models/Customer.interface'

export const CustomersService = {
	async getCustomers(searchTerm = ''): Promise<ICustomer[]> {
		const { data } = await axiosInstance.get(`/customers${searchTerm && `?name=${searchTerm}`}`)
		return data
	},

	async createCustomer(formBody: Omit<ICustomer, 'id'>): Promise<ICustomer> {
		const { data } = await axiosInstance.post('/customers', formBody)
		return data
	}
}
