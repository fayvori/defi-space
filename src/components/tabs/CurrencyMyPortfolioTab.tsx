import '../../assets/css/App.css'
import '../../assets/css/app.min.css'
import {CurrencyAccordion} from "../CurrencyAccordion";

export const CurrencyMyPortfolioTab = () => {
    return (
        <section className="table-potfolio table-section">
            <div className="container">
                <div className="table">
                    <div className="table__head">
                        <div className="table__head-data">Tokens</div>
                        <div className="table__head-data">Amount</div>
                        <div className="table__head-data">Value</div>
                        <div className="table__head-data">Buy price</div>
                        <div className="table__head-data">Vesting</div>
                        <div className="table__head-data">TGE</div>
                        <div className="table__head-data">Withdraw</div>
                    </div>

                        <CurrencyAccordion/>
                        <CurrencyAccordion/>
                    <div/>
                </div>
            </div>
        </section>
    )
}
