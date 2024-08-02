import {z} from 'zod'
import { CurrencySchema, CryptoCurrencyResponseSchema,PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'

//La funcion infiere que el schema es el tipo de dato que recibira
export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>