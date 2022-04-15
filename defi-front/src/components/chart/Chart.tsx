import ChartImage from "../../assets/images/src/chart-image.svg";

type ChartProps = {
    name: string;
    image: string;
    profit: string;
    price_token_today: string;
    price_today: string;
    private_price: string;
    entry_price: string;
    entry_date: string;
}

export const Chart = (props: ChartProps) => {
    return (
        <>
            <div className="chart__content">
                <div className="chart__content-info">
                    <span id="chart-name" className="name">( {props.name} )</span>
                    <div className="img-wrap">
                        <img id="chart-logo" src={props.image} alt=""
                             className="img"/>
                    </div>
                    <div className="profit">
                        <span className="profit__title">Profit %</span>
                        <span id="profit-percent" className="profit__percent">{props.profit} %</span>
                    </div>
                </div>
                <div className="chart__content-entry">
                    Entry : <span id="entry-info">{props.entry_date}</span>
                </div>

                <div className="chart__balloon left" id="bottom-card-info">
                    <div className="chart__balloon-top">
                        <span className="title-price">Private price</span>
                        <span className="price">{props.private_price} $</span>
                    </div>
                    <div className="chart__balloon-bottom">
                        <span className="title-price">Entry price</span>
                        <span className="price">{props.entry_price} $</span>
                    </div>
                </div>
                <div className="chart__balloon right" id="top-card-info">
                    <div className="chart__balloon-top">
                        <span className="title-price">Price token today</span>
                        <span className="price">{props.price_token_today} $</span>
                    </div>
                    <div className="chart__balloon-bottom">
                        <span className="title-price">Price today</span>
                        <span className="price">{props.price_today} $</span>
                    </div>
                </div>

                <img src={ChartImage} alt="" className="chart__content-img"/>
            </div>
        </>
    )
}
