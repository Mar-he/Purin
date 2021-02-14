import React, { useState, useEffect, useContext } from 'react'
import { Input, AutoComplete, Row, Col } from 'antd'
import styles from './Search.module.css'
import { data } from '../../data'
import renderCategory from './renderCategory'
import renderItem from './renderItem'
import { SearchContext } from '../../context/SearchContext'

const Search = () => {

    const [options, setOptions] = useState<any[]>([])

    const { state, dispatch } = useContext(SearchContext)

    const groupBy = (xs, key) => {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    const queryData = (e) => {
        return data
            .filter(d => {

                return e === ""
                    ? true
                    : d.name.toLowerCase().indexOf(e.toLowerCase()) !== -1
            });
    }

    const groupData = data => {
        const groupedByCat = groupBy(data, "cat")
        const items: any[] = []
        for (var prop in groupedByCat) {
            if (groupedByCat.hasOwnProperty(prop)) {
                var item = {}
                item["label"] = renderCategory(prop)
                item["options"] = []
                groupedByCat[prop].forEach(element => {
                    item["options"].push(renderItem(element["name"], element["harn"]))
                });
                items.push(item)
            }
        }
        return items;
    }

    const handleSearch = (e) => {
        var items = queryData(e)
        var grouped = groupData(items)
        setOptions(grouped)
    }

    const handleSelect = (e, o) => {
        var item = queryData(o.value)[0]
        //if the item is already in the array we do nothing
        if (!state.foods.some(x => x.id == item.id)) {
            dispatch({ type: 'ADD_FOOD', foods: [item] })
        }
    }

    return (
        <>
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <AutoComplete className={styles.search}
                        onSearch={handleSearch}
                        onSelect={handleSelect}
                        options={options}>
                        <Input.Search placeholder="Lebensmittelnamen hier eingeben ">
                        </Input.Search>
                    </AutoComplete>
                </Col>
            </Row>
        </>
    )
}

export default Search