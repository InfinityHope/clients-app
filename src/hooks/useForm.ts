import { FormContext } from '@/providers/form-provider/FormProvider'
import { useContext } from 'react'

export const useFormValues = () => useContext(FormContext)
