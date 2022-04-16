import '../../assets/css/App.css'
import '../../assets/css/App_crm.css'
import {CurrencyAccordion} from "../CurrencyAccordion";
import useAxios from "axios-hooks";
import {useEffect, useState} from "react";

export const CurrencyMyPortfolioTab = () => {
    const [totalOfOpened, setTotalOfOpened] = useState<number>(0)
    const [{ data, loading, error }, refetch] = useAxios(
        'https://backendapi.site/defi/defipool/portfolio/?format=json'
    )

    console.log("total opened", totalOfOpened)

    if (loading) return <p></p>
    if (error) return <p>Error!</p>

    return (
        <section className="table-potfolio table-section container-new">
            <div>
                <div className="table">
                    <div className="table__head">
                        <div className="table__head-data">Tokens</div>
                        <div className="table__head-data">Joining date</div>
                        <div className="table__head-data">Buy price</div>
                        <div className="table__head-data">My investment</div>
                        <div className="table__head-data">Amount</div>
                        <div className="table__head-data">Vesting</div>
                        <div className="table__head-data">{totalOfOpened === 0 ? "Profit" : "Withdraw"}</div>
                    </div>

                    {data.map((el: any) => (
                        <CurrencyAccordion projInfo={el} setTotalOfOpened={setTotalOfOpened} />
                    ))}
                </div>
            </div>
        </section>
    )
}
