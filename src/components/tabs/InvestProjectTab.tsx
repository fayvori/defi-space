import '../../assets/css/App.css'
import '../../assets/css/App_crm.css'
import {Accordion} from "../Accordion";
import useAxios from "axios-hooks";


const accordions = [
    {
        completed: 34,
        timedOut: false,
    },
    {
        completed: 100,
        timedOut: false
    }
]

export const InvestProjectTab = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        'https://backendapi.site/defi/defipool/projects/?format=json'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <>
            {data.map((el: any) => (
                <Accordion key={el.id} projectInfo={el} completed={23} timedOut={false} />
            ))}
        </>
    )
}
