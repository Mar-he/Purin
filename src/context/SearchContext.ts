import Search from 'antd/lib/transfer/search'
import React, { createContext } from 'react'
import { FoodType } from '../data'



type InitialStateType = {
    foods: FoodType[]
}

export const InitialState: InitialStateType = {
    foods: []
}

export const SearchContext = createContext<{
    state: InitialStateType,
    dispatch: React.Dispatch<any>
}>({
    state: InitialState,
    dispatch: () => null
})

export const SearchProvider = SearchContext.Provider
