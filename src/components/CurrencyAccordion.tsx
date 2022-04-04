import '../assets/css/App.css'
import '../assets/css/app.min.css'

import PascalLogo from '../assets/crm_images/src/logo-cur-1.png'
import PascalLogoBig from '../assets/crm_images/src/logo-cur-1-4x.png'
import BinanceLogo from '../assets/crm_images/src/binange-icon.png'
import SigenLogo from '../assets/crm_images/src/sigen.pro-icon.png'
import HotbitLogo from '../assets/crm_images/src/hotbit-icon.png'
import Collapsible from "react-collapsible";
import {useState} from "react";

const renderTrigger = (isOpen: boolean) => {
    return (
        <>
            {!isOpen ? (
                <div className="table-card table-card">
                    <button className="toggle-mobile-btn"></button>
                    <div className="table__body-head">
                        <div className="table__head table__head--min">
                            <div className="table__head-data tokens-col">
                                <div className="logo-wrap">
                                    <img src={PascalLogo} alt="" className="logo"/>
                                </div>
                                <div className="info">
                                    <span className="info-title">Pascal</span>
                                    <span className="info__short">PASC</span>
                                </div>
                            </div>
                            <div className="table__head-data amount-col">
                                <span className="info-title">296,898 PASC</span>
                            </div>
                            <div className="table__head-data value-col">
                                <span className="info-title">$4,360</span>
                            </div>
                            <div className="table__head-data buy-price-col">
                                <span className="info-title">296</span>
                            </div>
                            <div className="table__head-data vesting-col">
                                <span className="info-title">9 months</span>
                            </div>
                            <div className="table__head-data tge-col">
                                <span className="info-title">5%</span>
                            </div>
                            <div className="table__head-data withdraw-col">
                                <div className="controls">
                                    <button className="toggle-btn"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export const CurrencyAccordion = () => {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => {
        setIsOpen(false)
    }

    return (
        <section className="table-potfolio table-section">
            <div className="container">
                <div className="table">
                    {/*<div className="table__head">*/}
                    {/*    <div className="table__head-data">Tokens</div>*/}
                    {/*    <div className="table__head-data">Amount</div>*/}
                    {/*    <div className="table__head-data">Value</div>*/}
                    {/*    <div className="table__head-data">Buy price</div>*/}
                    {/*    <div className="table__head-data">Vesting</div>*/}
                    {/*    <div className="table__head-data">TGE</div>*/}
                    {/*    <div className="table__head-data">Withdraw</div>*/}
                    {/*</div>*/}

                    <Collapsible
                        trigger={renderTrigger(isOpen)}
                        onOpening={() => setIsOpen(true)}
                        onClosing={() => setIsOpen(false)}
                        open={isOpen}
                    >
                        <div className="table__body">
                            <div className="table-card table-card--open">
                                <button className="toggle-mobile-btn"></button>
                                <div className="table__body-head">
                                    <div className="table__head">
                                        <div className="table__head-data">
                                            <div className="logo-wrap">
                                                <img src={PascalLogo} alt="" className="logo"/>
                                            </div>
                                            <div className="info">
                                                <span className="info-title">Pascal</span>
                                                <span className="info__short">PASC</span>
                                            </div>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">296,898 PASC</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">$4,360</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">296</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">9 months</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">5%</span>
                                        </div>
                                        <div className="table__head-data">
                                            <div className="controls">
                                                <button className="toggle-btn"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="table__body-main">
                                    <div className="table__head">
                                        <div className="table__head-data">
                                            <div className="logo-wrap">
                                                <img src={PascalLogo} alt="" className="logo-img"/>
                                            </div>
                                            <div className="info">
                                                <span className="info-title">Pascal</span>
                                                <span className="info__short">PASC</span>
                                            </div>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">296,898 PASC</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">$4,360</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">296</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">9 months</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">5%</span>
                                        </div>
                                        <div className="table__head-data">
                                            <div className="controls">
                                                <button className="btn btn--green btn--claim">
                                                    <span className="btn__text">Claim</span>
                                                    <div className="btn__bg"></div>
                                                </button>
                                                <button className="toggle-btn" onClick={() => setIsOpen(false)}></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table__main">
                                        <div className="table__main-data tokens-col">
                                            <span className="title-col">Tokens</span>
                                            <div className="content">
                                                <span className="text">Pascal</span>
                                                <span className="text">PASC</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data amount-col">
                                            <span className="title-col">Amount</span>
                                            <div className="content">
                                                <span className="text">296,898 PASC</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data value-col">
                                            <span className="title-col">Value</span>
                                            <div className="content">
                                                <span className="text">$4,360</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data buy-price-col">
                                            <span className="title-col">Buy price</span>
                                            <div className="content">
                                                <span className="text">296</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data vesting-top-col">
                                            <span className="title-col">Vesting</span>
                                            <div className="content">
                                                <span className="text">7 month</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data tge-col">
                                            <span className="title-col">TGE</span>
                                            <div className="content">
                                                <span className="text">11%</span>
                                            </div>
                                        </div>

                                        <div className="table__main-data withdraw-col">
                                            <span className="title-col">Withdraw</span>
                                            <div className="content">
                                                <div className="controls">
                                                    <button className="btn btn--green-light">
                                                        <span className="btn__text">Claim</span>
                                                        <div className="btn__bg"></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table__main-data blockchain-col">
                                            <span className="title-col">Blockchain</span>
                                            <div className="content">
                                                <span className="text">BSC</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data info-col">
                                            <span className="title-col">Info</span>
                                            <div className="content">
                                                <span className="text">TRON is a decentralized, open-source blockchain-based operating system with smart contract functionality, proof-of-stake principles as its consensus algorithm and a cryptocurrency native to the system, known as Tronix (TRX).</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data analysis-col">
                                            <span className="title-col">Analysis</span>
                                            <div className="content">
                                                <div className="progress-ring-wrap">
                                                    <svg
                                                        className="progress-ring"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 120 120"
                                                    >
                                                        <circle
                                                            className="progress-ring__circle"
                                                            stroke="#fff"
                                                            stroke-width="10"
                                                            fill="transparent"
                                                            r="55"
                                                            cx="60"
                                                            cy="60"
                                                        />
                                                        <circle
                                                            id='circle-new'
                                                            className="progress-ring__circle"
                                                            stroke="#32D74D"
                                                            stroke-width="10"
                                                            fill="transparent"
                                                            r="55"
                                                            cx="60"
                                                            cy="60"
                                                        />
                                                    </svg>
                                                    <div className="progress-ring__inner">
                                                        <span className="progress-ring__inner-title">Total</span>
                                                        <span className="progress-ring__inner-desc"
                                                              data-total="5,291">$5,291</span>
                                                    </div>
                                                </div>
                                                <div className="info-wrap">
                                                    <div className="info">
                                                    <span className="info__desc info__desc"
                                                          data-in-project="2,294">$2,294</span>
                                                        <span className="info__title">In project</span>
                                                    </div>
                                                    <div className="info">
                                                    <span className="info__desc info__desc--green"
                                                          data-receive="2,997">$2,997</span>
                                                        <span className="info__title">Receive</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table__main-data vesting-col">
                                            <span className="title-col">Vesting</span>
                                            <div className="content">
                                                <span className="text">5% TGE</span>
                                                <span className="text">Then 10% monthly </span>
                                            </div>
                                        </div>
                                        <div className="table__main-data token-locked-col">
                                            <span className="title-col">Token locked</span>
                                            <div className="content">
                                                <span className="text">$2,294 (43%)</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data next-unlock-col">
                                            <span className="title-col">Next unlock</span>
                                            <div className="content">
                                                <span className="text">5 months left</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data profit-col">
                                            <span className="title-col">Profit</span>
                                            <div className="content">
                                                <span className="text text--accent">+ 375$</span>
                                                <span className="text text--accent">+ 27.2%</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data exchanges-col">
                                            <span className="title-col">Exchanges</span>
                                            <div className="content">
                                                <div className="exchanges-company">
                                                    <div className="exchanges-company__item">
                                                        <img className="exchanges-company__item-img"
                                                             src={BinanceLogo} alt="binange"/>
                                                    </div>
                                                    <div className="exchanges-company__item">
                                                        <img className="exchanges-company__item-img"
                                                             src={SigenLogo} alt="sigen.pro"/>
                                                    </div>
                                                    <div className="exchanges-company__item">
                                                        <img className="exchanges-company__item-img"
                                                             src={HotbitLogo} alt="hotbit"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table__main-data socials-col">
                                            <div className="content">
                                                <ul className="socials__list">
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#instagram">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/instagram-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#facebook">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/facebook-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#telegram">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/telegram-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#twitter">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/twitter-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#youtube">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/youtube-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#discord">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/discord-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#linkedin">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/linkedin-icon.svg" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="socials__item">
                                                        <a className="socials__item-link" target="_blank" href="#vk">
                                                            <img className="socials__item-img"
                                                                 src="./images/dist/vk-icon.svg"
                                                                 alt=""/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a className="project-link" target="_blank"
                                                   href="#project-link">Tron.network</a>
                                            </div>
                                        </div>
                                        <div className="table__main-data controls-col">
                                            <span className="title-col">&nbsp;</span>
                                            <div className="content">
                                                <div className="controls-list">
                                                    <div className="controls-list__item">
                                                        <a className="btn controls-list__item-btn" target="_blank"
                                                           href="#DEX">
                                                            <span className="btn__text">Exchange</span>
                                                            <div className="btn__bg"></div>
                                                        </a>
                                                    </div>
                                                    <div className="controls-list__item">
                                                        <a className="btn controls-list__item-btn" target="_blank"
                                                           href="#Live-chart">
                                                            <span className="btn__text">Live chart</span>
                                                            <div className="btn__bg"></div>
                                                        </a>
                                                    </div>
                                                    <div className="controls-list__item">
                                                        <a className="btn controls-list__item-btn" target="_blank"
                                                           href="#Scan">
                                                            <span className="btn__text">Scan</span>
                                                            <div className="btn__bg"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="logo-company" src={PascalLogoBig} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        </section>
    )
}
