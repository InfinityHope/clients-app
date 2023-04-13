export interface ICustomer {
	id: string
	name: string
	email: string
	deferral_days: number
	org: IOrg
	balance: IBalance
	metadata: IMetadata[]
	created_at?: string
	updated_at?: string
	status: 'active' | 'inactive'
	invoice_emails: string[]
}

export interface TCustomerFields {
	name: string
	email: string
	deferral_days: number
	org: IOrg
	balance: IBalance
	metadata: IMetadata[]
	created_at?: string
	updated_at?: string
	status: 'active' | 'inactive'
	invoice_emails: { value: string }[]
}

export interface IMetadata {
	[key: string]: string
}

export interface IBalance {
	currency: 'RUB' | 'USD' | 'EUR'
	current_amount: number
	credit_limit: number
	available_amount: number
}

export interface IOrg {
	id: string
	name: string
	inn: string
	kpp: string
	ogrn: string
	addr: string
	bank_accounts: IBankAccount[]
	created_at?: string
	updated_at?: string
}

export interface IBankAccount {
	id: string
	name: string
	bik: string
	account_number: string
	corr_account_number: string
	is_default: boolean
	created_at?: string
	updated_at?: string
}
