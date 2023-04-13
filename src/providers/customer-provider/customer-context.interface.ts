import { ICustomer } from '@/models/Customer.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IContext {
	customers: ICustomer[]
	setCustomers: Dispatch<SetStateAction<ICustomer[]>>
	loading: boolean
	error: string
}
