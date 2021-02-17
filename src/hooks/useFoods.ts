import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { TableFoodType } from '../data'

const useFoods = () => {

    const { state, dispatch } = useContext(SearchContext)
    const [foods, setFoodData] = useState<TableFoodType[]>([])

    useEffect(() => {
        const mappedStateData = state.foods.map(itm => {
            return {
                ...itm
            } as TableFoodType
        })

        setFoodData(mappedStateData)

    }, [state])

    const setFoods = (e: TableFoodType[]) => {
        //update foods state via dispatch in Context
        dispatch({ type: 'SET_FOOD', foods: e })
    }

    return { foods, setFoods }
}

export default useFoods