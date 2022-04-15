
type IProps = {
    name: string
    image: string
    active: boolean
    style: any
}

export const ChartLabel = (props: IProps) => {
    return (
        <li className={`chart__item ${props.active && "active"}`} style={props.style}>
            <img src={props.image} style={{ maxWidth: 60 }} />
            <div className={`chart__item ${props.active && "active"} name`}>
                {props.name}
            </div>
        </li>
    )
}
