import React, { useState } from 'react'
import { Layout, Menu, } from 'antd'
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
                    Übersicht
            </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Datenschutz
            </Menu.Item>


            </Menu>
        </Sider>
    )
}

export default LayoutSider