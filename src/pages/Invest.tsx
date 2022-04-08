import {Accordion} from "../components/Accordion";
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import WalletIcon from '../assets/crm_images/src/wallet-icon.svg'
import {CurrencyAccordion} from "../components/CurrencyAccordion";
import {CurrencyMyPortfolioTab} from "../components/tabs/CurrencyMyPortfolioTab";
import {InvestProjectTab} from "../components/tabs/InvestProjectTab";
import {AllHistoryTab} from "../components/tabs/AllHistoryTab";
import '../assets/css/tabs.css'
import '../assets/css/App.css'
import {useState} from "react";

const accordions = [
    {
        completed: 34,
        timedOut: false
    },
    {
        completed: 100,
        timedOut: false
    },
]

export const Invest = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const wallet = localStorage.getItem("wallet")

    return (
        <Tabs onSelect={index => setSelectedTab(index)}>
            <section className="navigation">
                <div className="container">
                    <div className="navigation-top">
                        <div className="container flex">
                            <div className="navigation-top__left">
                                <Link className="btn" to={"/"}>
                                    <span className="btn__text">Disconnect</span>
                                    <div className="btn__bg"></div>
                                </Link>
                            </div>
                            <div className="navigation-top__right">
                                <div className="wallet">
                                    <img src={WalletIcon} alt="" className="wallet__img"/>
                                    <span className="wallet__text">0xb2c6...ff92</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-bottom">
                        <div className="navigation-bottom__left">
                            <nav className="menu">
                                <ul className="menu__list">
                                    <Tab className="menu__item menu__link">New</Tab>
                                    <Tab className="menu__item menu__link">My portfolio</Tab>
                                    <Tab className="menu__item menu__link">All history</Tab>
                                </ul>
                            </nav>
                        </div>
                        <div className="navigation-bottom__right">
                            <div className="profit-info">
                                <p className="profit-info__title">Total profit</p>
                                <p className="profit-info__content">
                                    <span className="profit-info__content-price">$46,817</span>
                                    <span className="profit-info__content-percent">59%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <TabPanel>
                    <InvestProjectTab/>
                </TabPanel>
                <TabPanel>
                    <CurrencyMyPortfolioTab/>
                </TabPanel>
                <TabPanel>
                    <AllHistoryTab/>
                </TabPanel>
            </section>
        </Tabs>
    )
}
