
export default function List({children, title, listTestId, headTestId}) {
    return (
        <div  data-testid="list-content">
            <h2 data-testid={headTestId} >{title}</h2>
            <ul data-testid={listTestId}>
                {children}
            </ul>
        </div>
    )

};
 