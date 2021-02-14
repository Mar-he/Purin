const renderCategory = (title) => {
    return (
        <span>
            {title}
            <a
                style={{
                    float: 'right',
                }}
                href={"https://www.google.com/search?q=" + title}
                target="_blank"
                rel="noopener noreferrer"
            >
                more...
        </a>
        </span>
    );
};
export default renderCategory
