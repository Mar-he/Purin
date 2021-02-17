import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { data, TableFoodType } from '../data'

const useSearchData = () => {

    const { state, dispatch } = useContext(SearchContext)
    const [foods, setFoodData] = useState<TableFoodType[]>([])

    useEffect(() => {
        const mappedStateData = data.map(itm => {
            return {
                ...itm,
                amount: 100
            } as TableFoodType
        })

        setFoodData(mappedStateData)

    }, [state])

    return { foods }
}

export default useSearchData