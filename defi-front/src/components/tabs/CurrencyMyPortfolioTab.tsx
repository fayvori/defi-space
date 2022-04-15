import '../../assets/css/App.css'
import '../../assets/css/App_crm.css'
import {CurrencyAccordion} from "../CurrencyAccordion";
import useAxios from "axios-hooks";

export const CurrencyMyPortfolioTab = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        'https://backendapi.site/defi/defipool/portfolio/?format=json'
    )

    if (loading) return <p></p>
    if (error) return <p>Error!</p>

    return (
        <section className="table-potfolio table-section container-new">
            <div>
                <div className="table">
                    <div className="table__head">
                        <div className="table__head-data">Tokens</div>
                        <div className="table__head-data">Amount</div>
                        <div className="table__head-data">Value</div>
                        <div className="table__head-data">Buy price</div>
                        <div className="table__head-data">My investment</div>
                        <div className="table__head-data">Joining date</div>
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
