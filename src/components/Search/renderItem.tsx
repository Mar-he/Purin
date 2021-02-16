import { TagsTwoTone } from '@ant-design/icons';
import { TableFoodType } from '../../data';
import { colorIndicator } from '../../utils'


const renderItem = (item: TableFoodType) => {
    const hasKind = item["kind"].length > 0
    const color = colorIndicator(item.harn)
    return {
        value: `${item.key} ${item.name}`,
        label: (
            <div
                style={{
                    display: 'flex',
                }}
            >
                {item.key} {item.name} {hasKind ? `(${item.kind})` : ""}
                <span>
                    <TagsTwoTone twoToneColor={color} /> {item.harn}
                </span>
            </div>
        ),
    };
};

export default renderItem