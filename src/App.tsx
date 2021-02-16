import React, { useState } from 'react';
import styles from './App.module.css';
import { Layout, Menu } from 'antd'
import Home from './home'
import Impressum from './Impressum'
import { Route, Switch } from 'react-router-dom'
import LayoutSider from './components/LayoutSider/LayoutSider'
const { Header, Content, Footer } = Layout

function App() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutSider></LayoutSider>
        <Layout className={styles.layout}>
          <Content>
            <Switch>
              <Route path="/Impressum" component={Impressum}></Route>
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </Content>
          <Footer className={styles.footer} style={{ textAlign: "center" }}>
            Purin.io
        </Footer>
        </Layout>
      </Layout>

    </>
  );
}

export default App;
