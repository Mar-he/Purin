import React, { useContext, useEffect, useState } from 'react'
import { Table, Row, Col, InputNumber, Result } from 'antd'
import useFoodData from '../../hooks/useFoods'
import { DeleteOutlined } from '@ant-design/icons'
import SummaryRow from './SummaryRow'
import { colorIndicator } from '../../utils'
const FoodList = (e) => {

    const { foods, setFoods } = useFoodData()
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        console.log("foods changed in table: ", foods)
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
                        defaultValue={record.portionG}
                        min={0}
                        formatter={value => `${value}g`}
                        parser={value => value?.replace('g', '') || 0}
                        onChange={newValue => {
                            //if there is a new numeric value, we recalculate the new "amount" of the record and set it
                            if (newValue || newValue === 0) {
                                const number = typeof newValue === "string"
                                    ? parseFloat(newValue)
                                    : newValue
                                let newFoods = foods.map((opt, i) => i === index ? { ...record, amount: number } : opt)
                                console.log("newFoods: ", newFoods)
                                setFoods(newFoods)
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
                            setFoods(foods.filter((opt, i) => opt.key !== record.key))
                        }}
                    />
                )
            }
        }

    ]


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
                        summary={(data) => SummaryRow(data)}
                    >

                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default FoodList