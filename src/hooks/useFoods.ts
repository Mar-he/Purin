import { type } from 'os'
import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { data, TableFoodType } from '../data'

const useFoods = () => {

    const { state, dispatch } = useContext(SearchContext)
    const [foods, setFoodData] = useState<TableFoodType[]>([])

    useEffect(() => {
        const mappedStateData = state.foods.map(itm => {
            return {
                ...itm,
                amount: 100
            } as TableFoodType
        })

        setFoodData(mappedStateData)

    }, [state])

    const setFoods = (e) => {
        console.log("setFoods called inside useFoods hook ", e)
        //update foods state via dispatch in Context
        dispatch({ type: 'SET_FOOD', foods: e})
        //update the state
        setFoodData(e)
    }

    return { foods, setFoods }
}

export default useFoods