import { TagsTwoTone } from '@ant-design/icons';


const renderItem = (title, harn) => {
    return {
        value: title,
        label: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {title}
                <span>
                    <TagsTwoTone twoToneColor="#1DA57A" /> {harn}
                </span>
            </div>
        ),
    };
};

export default renderItem