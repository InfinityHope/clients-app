import { axiosInstance } from '@/api/axios.instance'
import { ICustomer, TCreateCustomer } from '@/models/Customer.interface'

export const CustomersService = {
	async getCustomers(): Promise<ICustomer[]> {
		const { data } = await axiosInstance.get('/customers')
		return data
	},

	async createCustomer(formBody: TCreateCustomer): Promise<ICustomer> {
		const { data } = await axiosInstance.post('/customers', formBody)
		return data
	}
}
