import '../../assets/css/App.css'
import '../../assets/css/App_crm.css'
import {CurrencyAccordion} from "../CurrencyAccordion";
import useAxios from "axios-hooks";

export const CurrencyMyPortfolioTab = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        'https://backendapi.site/defi/defipool/projects/?format=json'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

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

                    {data.map((el: any) => (
                        <CurrencyAccordion projInfo={el} />
                    ))}
                </div>
            </div>
        </section>
    )
}
