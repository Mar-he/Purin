import React, { useState, useReducer } from 'react';
import { Button } from 'antd';
import styles from './App.module.css';
import { Layout } from 'antd'
import Search from './components/Search/Search'
import { SearchProvider, InitialState } from './context/SearchContext'
import SearchReducer from './reducer/SearchReducer'
import FoodList from './components/FoodList/FoodList'

const { Header, Content, Footer } = Layout

function App() {
  const [state, dispatch] = useReducer(SearchReducer, InitialState)
  return (
    <>
      <Layout className={styles.layout}>
        <Header>Purin.io</Header>
        <Content>
          <SearchProvider value={{ state, dispatch }}>
            <Search></Search>
            <FoodList></FoodList>
          </SearchProvider>
        </Content>
        <Footer className={styles.footer} style={{ textAlign: "center" }}>
          Purin.io
        </Footer>
      </Layout>
    </>
  );
}

export default App;
