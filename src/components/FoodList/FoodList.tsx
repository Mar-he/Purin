import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { Table, Row, Col, InputNumber, Result } from 'antd'
import useFoodData from '../../hooks/useFoods'
import { TableFoodType } from '../../data'
import { DeleteOutlined } from '@ant-design/icons'

import styles from './FoodList.module.css'
import { colorIndicator } from '../../utils'
const FoodList = (e) => {

    const { foods, setFoods } = useFoodData()
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        setIsEmpty(foods.length ? false : true)
    }, [foods])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                let color = colorIndicator(record.harn)
                return {

                    props: {
                        style: {
                            background: `linear-gradient(90deg, ${color} 0%, ${color} 2%, #fff 2%, #fff 100%)`
                        }
                    },
                    children: <div> {text}</div>
                }
            }
        },
        {
            title: 'Art',
            dataIndex: 'kind',
            key: 'kind',
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
                                setFoods(foods.map((opt, i) => i === index ? { ...record, amount: number } : opt))
                            }
                        }}
                    />
                )
            }
        },
        {
            render: (text, record, idx) => {
                return (
                    <DeleteOutlined
                        onClick={e => {
                            console.log(e, text, record, idx)
                            setFoods(foods.filter((opt, i) => opt.key !== record.key))
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
            {isEmpty && <Result status={"info"}
                title="Wählen Sie die gewünschten Lebensmittel über die Suche, um mit der Berechnung der Putinwerte zu beginnen."

            />
            }
            <Row gutter={[0, 16]} style={{ display: isEmpty ? 'none' : 'block' }}>
                <Col span={24}>

                    <Table
                        key={"key"}
                        pagination={false}
                        bordered={false}
                        dataSource={foods}
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