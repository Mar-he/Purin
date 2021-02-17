import { Table, Progress } from 'antd'
import { exception } from 'console'
import React, { useEffect, useState } from 'react'
import { TableFoodType } from '../../data'

const SummaryRow = (data: readonly TableFoodType[]) => {

    const [localTotal, setLocalTotal] = useState(0)

    useEffect(() => {
        let harnTotal = data.reduce((prev, curr) => {
            return prev + curr.harn * curr.amount / 100
        }, 0)
        setLocalTotal(+(harnTotal * 100 / 500).toFixed(0))
    }, [data])


    return (
        <Table.Summary.Row>
            <Table.Summary.Cell index={0}><span>Gesamt Harnsäure in mg: </span></Table.Summary.Cell>
            <Table.Summary.Cell index={1}>
                {localTotal.toFixed(2)}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={4}>
                <Progress
                    status="exception"
                    percent={localTotal}
                >
                </Progress>
            </Table.Summary.Cell>
        </Table.Summary.Row>
    )
}

export default SummaryRow