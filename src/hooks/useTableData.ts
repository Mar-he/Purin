import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { data, TableFoodType } from '../data'

const useTableData = () => {

    const { state, dispatch } = useContext(SearchContext)
    const [tableData, setTableData] = useState<TableFoodType[]>([])
    useEffect(() => {
        const mappedStateData = state.foods.map(itm => {
            return {
                key: itm.id,
                cat: itm.cat,
                name: itm.name,
                harn: itm.harn,
                amount: 100
            } as TableFoodType
        })

        setTableData(mappedStateData)

    }, [state])

    return { tableData, setTableData }
}

export default useTableData