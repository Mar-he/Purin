import Search from 'antd/lib/transfer/search'
import React from 'react'
import { FoodType } from '../data'



type InitialStateType = {
    foods: FoodType[]
}

export const InitialState: InitialStateType = {
    foods: []
}

const SearchContext = React.createContext<{
    state: InitialStateType,
    dispatch: React.Dispatch<any>
}>({
    state: InitialState,
    dispatch: () => null
})

const SearchProvider = SearchContext.Provider

export { SearchContext, SearchProvider }