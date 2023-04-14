import { TCustomerFields } from '@/models/Customer.interface'
import { Control, UseFormHandleSubmit, UseFormReset, UseFormSetValue } from 'react-hook-form'

export interface IContext {
	control: Control<TCustomerFields>
	handleSubmit: UseFormHandleSubmit<TCustomerFields>
	reset: UseFormReset<TCustomerFields>
	setValue: UseFormSetValue<TCustomerFields>
}
