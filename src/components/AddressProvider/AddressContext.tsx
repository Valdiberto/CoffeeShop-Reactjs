import { createContext, ReactNode, useEffect, useState } from 'react'
import { useForm, UseFormRegister, UseFormWatch } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Addresses {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

interface AddressContextType {
  address: Addresses
  setAddress: (addresses: Addresses) => void
  register: UseFormRegister<Addresses>
  watch: UseFormWatch<Addresses>
}

interface AddressContextProvidederProps {
  children: ReactNode
}
const AddressesFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  rua: zod.string(),
  numero: zod.string().min(1).max(8),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string().min(2).max(2),
})

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({
  children,
}: AddressContextProvidederProps) {
  const [address, setAddress] = useState<Addresses>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  })
  const { register, watch } = useForm<Addresses>({
    resolver: zodResolver(AddressesFormValidationSchema),
  })

  useEffect(() => {
    const subscription = watch((data) => {
      setAddress((prev) => ({
        cep: data.cep ?? prev.cep,
        rua: data.rua ?? prev.rua,
        numero: data.numero ?? prev.numero,
        complemento: data.complemento ?? prev.complemento,
        bairro: data.bairro ?? prev.bairro,
        cidade: data.cidade ?? prev.cidade,
        uf: data.uf ?? prev.uf,
      }))
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <AddressContext.Provider value={{ address, setAddress, register, watch }}>
      {children}
    </AddressContext.Provider>
  )
}
