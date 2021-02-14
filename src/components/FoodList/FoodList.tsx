import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { Table, Row, Col, InputNumber } from 'antd'
import useTableData from '../../hooks/useTableData'
import { TableFoodType } from '../../data'
import { EditableRow } from './EditableRow'
import { EditableCell } from './EditableCell'

const FoodList = (e) => {

    const { tableData, setTableData } = useTableData()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Kategorie',
            dataIndex: 'cat',
            key: 'cat',
        },
        {
            title: 'Harnsäure (mg/100g)',
            dataIndex: 'harn',
            key: 'harn',
        },
        {
            title: "Menge",
            dataIndex: "amount",
            render: (text, record, index) => {
                return (
                    <InputNumber
                        defaultValue={record.amount}
                        min={0}
                        formatter={value => `${value}g`}
                        parser={value => value?.replace('g', '') || 0}
                        onChange={newValue => {
                            if (newValue) {
                                const number = typeof newValue === "string" ? parseFloat(newValue) : newValue
                                setTableData(tableData.map((opt, i) => i === index ? { ...record, amount: number } : opt))
                            }
                        }}
                    />
                )
            }
        }
    ]

    const summary = (data: readonly TableFoodType[]) => {
        let totalHarn: number = 0
        data.forEach(({ harn, amount }) => {
            totalHarn += harn * (amount / 100)
        })
        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}><span>Gesamt Harnsäure in mg: </span></Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                    {totalHarn}
                </Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return (

        <>
            <Row gutter={[0, 16]}>
                <Col span={24}>

                    <Table
                        pagination={false}
                        bordered={false}
                        dataSource={tableData   }
                        columns={columns}
                        summary={(data) => summary(data)}
                    >

                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default FoodList