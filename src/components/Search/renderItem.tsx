import { TagsTwoTone } from '@ant-design/icons';
import { TableFoodType } from '../../data';
import { colorIndicator } from '../../utils'
import styles from './renderItem.module.css'
import { Divider } from 'antd'

const renderItem = (item: TableFoodType) => {
    const hasKind = item["kind"].length > 0
    const color = colorIndicator(item.harn)
    return {
        value: `${item.key} ${item.name}`,
        label: (
            <div className={styles.itemContainer}>
                <span className={styles.item}>{item.name} {hasKind ? `(${item.kind})` : ""}</span> <Divider type="vertical" />
                <span className={styles.item}>
                    HS: <TagsTwoTone twoToneColor={color} /> {item.harn}
                </span><Divider type="vertical" />
                <span>R: {item.purin}</span>
            </div>
        ),
    };
};

export default renderItem