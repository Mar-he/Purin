import React, { useReducer } from 'react'

import Search from './components/Search/Search'
import { SearchProvider, InitialState } from './context/SearchContext'
import SearchReducer from './reducer/SearchReducer'
import FoodList from './components/FoodList/FoodList'
import { Space } from 'antd'

const Home = props => {

    const [state, dispatch] = useReducer(SearchReducer, InitialState)
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