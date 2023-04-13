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

// const FormProvider: FC<PropsWithChildren> = ({ children }) => {
// 	const { control, handleSubmit } = useForm({})
// 	const [customer, setCustomer] = useState<TCustomerForm>({
// 		name: '',
// 		email: '',
// 		deferral_days: 0,
// 		status: 'active',
// 		balance: {
// 			available_amount: 0,
// 			current_amount: 0,
// 			currency: 'RUB',
// 			credit_limit: 0
// 		}
// 	})

// 	const [org, setOrg] = useState<Omit<IOrg, 'id'>>({
// 		name: '',
// 		inn: '',
// 		kpp: '',
// 		ogrn: '',
// 		addr: '',
// 		bank_accounts: []
// 	})

// 	const [bankAccounts, setBankAccounts] = useState<TBankAccountForm<IBankAccount>[]>([
// 		{
// 			id: '',
// 			formId: 1,
// 			name: '',
// 			bik: '',
// 			account_number: '',
// 			corr_account_number: '',
// 			is_default: true
// 		}
// 	])

// 	const [invoiceEmails, setInvoiceEmails] = useState<TInvoicesEmailsInput[]>([
// 		{
// 			id: 1,
// 			value: ''
// 		}
// 	])

// 	const [metaData, setMetaData] = useState<TMetaDataForm[]>([])

// 	const changeMetaDataValue = (formId: number | undefined, e: ChangeEvent<HTMLInputElement>) => {
// 		setMetaData(
// 			metaData.map(meta =>
// 				meta.formId === formId ? { ...meta, [e.target.name]: e.target.value } : meta
// 			)
// 		)
// 	}

// 	const changeInvoiceEmails = (e: ChangeEvent<HTMLInputElement>, id: number) => {
// 		setInvoiceEmails(
// 			invoiceEmails.map(invoiceEmail =>
// 				invoiceEmail.id === id ? { ...invoiceEmail, value: e.target.value } : invoiceEmail
// 			)
// 		)
// 	}

// 	const changeBankAccountValue = (
// 		formId: number | undefined,
// 		e: ChangeEvent<HTMLInputElement>
// 	) => {
// 		setBankAccounts(
// 			bankAccounts.map(bankAccount =>
// 				bankAccount.formId === formId
// 					? { ...bankAccount, [e.target.name]: e.target.value }
// 					: bankAccount
// 			)
// 		)
// 	}

// 	const changeSwitchValue = (formId: number | undefined) => {
// 		setBankAccounts(
// 			bankAccounts.map(bankAccount =>
// 				bankAccount.formId === formId
// 					? { ...bankAccount, is_default: true }
// 					: { ...bankAccount, is_default: false }
// 			)
// 		)
// 	}

// 	const changeCustomerValues = (e: ChangeEvent<HTMLInputElement>) => {
// 		setCustomer(
// 			e.target.name === 'credit_limit'
// 				? { ...customer, balance: { ...customer.balance, credit_limit: +e.target.value } }
// 				: { ...customer, [e.target.name]: e.target.value }
// 		)
// 	}

// 	const changeOrgValues = (e: ChangeEvent<HTMLInputElement>) => {
// 		setOrg({ ...org, [e.target.name]: e.target.value })
// 	}

// 	return (
// 		<FormContext.Provider
// 			value={{
// 				customer,
// 				org,
// 				bankAccounts,
// 				invoiceEmails,
// 				metaData,
// 				changeCustomerValues,
// 				changeOrgValues,
// 				changeBankAccountValue,
// 				changeSwitchValue,
// 				setBankAccounts,
// 				setInvoiceEmails,
// 				changeInvoiceEmails,
// 				changeMetaDataValue,
// 				setMetaData
// 			}}
// 		>
// 			{children}
// 		</FormContext.Provider>
// 	)
// }

export default FormProvider
