import { TCustomerFields } from '@/models/Customer.interface'
import { uid } from '@/utils/uid'
import { FC, PropsWithChildren, createContext } from 'react'
import { useForm } from 'react-hook-form'
import { IContext } from './form-context.interface'

export const FormContext = createContext({} as IContext)

const FormProvider: FC<PropsWithChildren> = ({ children }) => {
	const { control, handleSubmit, reset, setValue } = useForm<TCustomerFields>({
		defaultValues: {
			name: '',
			email: '',
			deferral_days: 0,
			balance: {
				available_amount: 0,
				current_amount: 0,
				currency: 'RUB',
				credit_limit: 0
			},
			org: {
				name: '',
				inn: '',
				kpp: '',
				ogrn: '',
				addr: '',
				created_at: new Date().toISOString(),
				updated_at: new Date().toISOString(),
				bank_accounts: [
					{
						id: uid(),
						name: '',
						bik: '',
						account_number: '',
						corr_account_number: '',
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						is_default: true
					}
				]
			},
			invoice_emails: [{ value: '' }],
			metadata: [],
			status: 'active'
		}
	})

	return (
		<FormContext.Provider
			value={{
				control,
				handleSubmit,
				reset,
				setValue
			}}
		>
			{children}
		</FormContext.Provider>
	)
}

export default FormProvider
