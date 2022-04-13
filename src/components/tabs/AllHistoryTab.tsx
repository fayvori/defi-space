import '../../assets/css/App.css'
import '../../assets/css/App_crm.css'
import {AllHistoryAccordion} from "../AllHistoryAccordion";
import useAxios from "axios-hooks";

export const AllHistoryTab = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        'https://backendapi.site/defi/defipool/projects_history/?format=json'
    )

    if (loading) return <p></p>
    if (error) return <p>Error!</p>

    return (
        <>
            <section className="table-potfolio table-section container-new">
                <div>
                    <div className="table">
                        <div className="table__head">
                            <div className="table__head-data">Tokens</div>
                            <div className="table__head-data">Amount</div>
                            <div className="table__head-data">Value</div>
                            <div className="table__head-data">Buy price</div>
                            <div className="table__head-data">My investment</div>
                            <div className="table__head-data">TGE</div>
                        </div>

                        {data.map((el: any) => (
                            <AllHistoryAccordion projInfo={el} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
