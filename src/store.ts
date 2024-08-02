import {create} from 'zustand'
import { CryptoCurrency, CryptoPrice, Pair } from './types'
import {devtools} from 'zustand/middleware'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoServices'

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
    loading:boolean
    fetchData: (pair:Pair) => Promise<void>
    result:CryptoPrice
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies:[],
    result:{
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,

    fetchCryptos: async() => {
        const cryptocurrencies= await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },

    fetchData: async (pair) => {

        set(() => ({
            loading:true
        }))

        const result = await fetchCurrentCryptoPrice(pair)

        set(() => ({
            result,
            loading:false
        }))
    }   
    
})))




