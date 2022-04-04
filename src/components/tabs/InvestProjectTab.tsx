import '../../assets/css/App.css'
import '../../assets/css/app.min.css'
import {Accordion} from "../Accordion";
import useAxios from "axios-hooks";


const accordions = [
    {
        completed: 34,
        timedOut: false,
        accordionData: {
            "vesting_tag": {
                "name": "TGE"
            },
            "investors": [
                {
                    "id": 1,
                    "name": "SHIMA CAPITAL"
                }
            ],
            "platforms": [
                {
                    "id": 1,
                    "name": "Polkastarter"
                }
            ],
            "name": "DeFiYield",
            "url": "defiyield.app",
            "description": "DeFiYield - это первая межцепочечная децентрализованная сеть безопасности, выполняющая задачу сделать пространство DeFi безопаснее для всех. \r\n\r\nНаши два революционных инструмента обеспечивают легкость, безопасность и уверенность при инвестировании.\r\n\r\nПанель управления активами (уже работает в 14 сетях, скоро также на Solana, Terra, Cosmos)\r\nПросматривайте эффективность своего портфеля как профессионал\r\nВключая активы, позиции, прибыль и убыток, калькулятор непостоянных убытков, обзор пулов и другие.",
            "round": "C",
            "price": "0.26000",
            "vesting_percent": 5,
            "percent_monthly": 10,
            "image": "http://localhost:8000/media/defi_projects/defi_logo_qcfqbDL.png"
        }
    },
    {
        completed: 100,
        timedOut: false,
        accordionData: {
            "vesting_tag": {
                "name": "TGE"
            },
            "investors": [
                {
                    "id": 1,
                    "name": "SHIMA CAPITAL"
                }
            ],
            "platforms": [
                {
                    "id": 1,
                    "name": "Polkastarter"
                }
            ],
            "name": "DeFiYield",
            "url": "defiyield.app",
            "description": "DeFiYield - это первая межцепочечная децентрализованная сеть безопасности, выполняющая задачу сделать пространство DeFi безопаснее для всех. \r\n\r\nНаши два революционных инструмента обеспечивают легкость, безопасность и уверенность при инвестировании.\r\n\r\nПанель управления активами (уже работает в 14 сетях, скоро также на Solana, Terra, Cosmos)\r\nПросматривайте эффективность своего портфеля как профессионал\r\nВключая активы, позиции, прибыль и убыток, калькулятор непостоянных убытков, обзор пулов и другие.",
            "round": "C",
            "price": "0.26000",
            "vesting_percent": 5,
            "percent_monthly": 10,
            "image": "http://localhost:8000/media/defi_projects/defi_logo_qcfqbDL.png"
        }
    },
]

export const InvestProjectTab = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:8000/projects/?format=json'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <>
            {data.map((el: any) => (
                <Accordion projectInfo={el} completed={accordions[0].completed} timedOut={accordions[0].timedOut} />
            ))}
        </>
    )
}
