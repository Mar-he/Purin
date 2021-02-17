import React, { useEffect, useReducer } from 'react'

import Search from './components/Search/Search'
import { SearchProvider, InitialState } from './context/SearchContext'
import SearchReducer from './reducer/SearchReducer'
import FoodList from './components/FoodList/FoodList'
import { Space } from 'antd'
import { data} from './data'

const Home = props => {

    const [state, dispatch] = useReducer(SearchReducer, InitialState)
    useEffect(() => {
        //dispatch some inital food into the state
        dispatch({ type: 'ADD_FOOD', foods: [] })
    }, [])
    return (
        <SearchProvider value={{ state, dispatch }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Search></Search>
                <FoodList></FoodList>
            </Space>
        </SearchProvider >
    )
}

export default Home