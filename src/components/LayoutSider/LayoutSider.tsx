import React, { useState } from 'react'
import { Layout, Menu, } from 'antd'
import { Link } from 'react-router-dom'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
const LayoutSider = props => {
    const { Sider } = Layout
    const { SubMenu } = Menu
    const [collapsed, setCollapsed] = useState(true)
    const handleCollapse = e => {
        setCollapsed(e)
    }

    return (
        <Sider collapsible
            collapsed={collapsed}
            onCollapse={handleCollapse}
            theme="dark">
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to="/">
                        Übersicht</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/impressum">
                        Datenschutz</Link>
            </Menu.Item>


            </Menu>
        </Sider>
    )
}

export default LayoutSider