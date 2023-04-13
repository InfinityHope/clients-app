import { axiosInstance } from '@/api/axios.instance'
import { ICustomer, TCustomerFields } from '@/models/Customer.interface'

export const CustomersService = {
	async getCustomers(): Promise<ICustomer[]> {
		const { data } = await axiosInstance.get('/customers')
		return data
	},

	async createCustomer(formBody: TCustomerFields): Promise<ICustomer> {
		const { data } = await axiosInstance.post('/customers', formBody)
		return data
	}
}
