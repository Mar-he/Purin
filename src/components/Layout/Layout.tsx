import React from 'react'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout
import styles from './Layout.module.css'

const PageLayout = ({ children }) => {

    return (
        <>
            <Layout className={styles.layout}>
                <Header>
                    Purin.io Title
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer className={styles.footer} style={{ textAlign: "center" }}>
                    Purin.io
                </Footer>
            </Layout>
        </>
    )
}

export default PageLayout