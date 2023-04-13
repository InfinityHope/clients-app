import { CustomerContext } from '@/providers/customer-provider/CustomerProvider'
import { useContext } from 'react'

export const useCustomers = () => useContext(CustomerContext)
