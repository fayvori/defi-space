import '../assets/css/App.css'

import LogoCur from '../assets/crm_images/src/logo-cur-2-2x.png'
import InstagramIcon from '../assets/crm_images/src/instagram-icon.svg'
import FacebookIcon from '../assets/crm_images/src/facebook-icon.svg'
import TelegramIcon from '../assets/crm_images/src/telegram-icon.svg'
import TwitterIcon from '../assets/crm_images/src/twitter-icon.svg'
import {Steps, StepsProvider, useSteps} from "react-step-builder";
import ProgressBar from "@ramonak/react-progress-bar";
import Collapsible from "react-collapsible";
import {useState} from "react";

type AccordionCloseProps = {
    close: () => void;
}

const AccordionStep1 = (props: AccordionProps) => {
    const stepsState = useSteps()

    return (
        <div className="main-col">
            {/*//@ts-ignore*/}
            <button className="toggle-btn" onClick={() => props.close()}></button>
            <div className="base-state">
                <div className="table-data round-col">
                    <span className="title-col">Round</span>
                    <div className="content">
                        <span className="text text-subtitle">{`Round ${props.projectInfo.round}, Price - ${props.projectInfo.price}$`}</span>
                    </div>
                </div>
                <div className="table-data vesting-col">
                    <span className="title-col">Vesting</span>
                    <div className="content">
                        <span className="text text-subtitle">{`${props.projectInfo.vesting_percent} ${props.projectInfo.vesting_tag.name}`}</span>
                        <span className="text">{`Then ${props.projectInfo.percent_monthly}% monthly`}</span>
                    </div>
                </div>
                <div className="table-data ido-col">
                    <span className="title-col">IDO</span>
                    <div className="content">
                                                <span
                                                    className="text text-subtitle">Ведутся переговоры с площадками:</span>
                        <span className="text">{`${props.projectInfo.platforms.map((el: any) => el.name).join(", ")}`}</span>
                    </div>
                </div>
                <div className="table-data investors-col">
                    <span className="title-col">Investors</span>
                    <div className="content">
                        <span className="text text-subtitle">{`${props.projectInfo.investors.map((el: any) => el.name).join(", ")}`}</span>
                    </div>
                </div>
                <div className="table-data allocation-col">
                                            <span className="title-col">
                                                Allocation
                                                <span className="price-time">
                                                    <span className="price title-col--white">250k</span>
                                                    <span className="time title-col--white">24h</span>
                                                </span>
                                            </span>
                    <div className="content">
                        <ProgressBar completed={props.completed} maxCompleted={100} className={"wrapper"}
                                     baseBgColor={"transparent"} bgColor={!props.timedOut ? "#1AB641" : "#e83737"}/>
                    </div>
                </div>
                <div className="table-data expire-col">
                                            <span className="title-col title-col--white">
                                                &nbsp;
                                            </span>
                    <div className="content">
                        <span className="text"></span>
                    </div>
                </div>
                <div className="table-data controls-col">
                    <div className="content">
                        {props.completed < 100 ?
                            (
                                <div className="controls">
                                    <button className="btn btn--green-light" id="btn-green"
                                            onClick={() => stepsState.next()}>
                                        <span className="btn__text">Invest</span>
                                        <div className="btn__bg"></div>
                                    </button>
                                    <button className="btn">
                                        <span className="btn__text">Scan</span>
                                        <div className="btn__bg"></div>
                                    </button>
                                </div>
                            ) : (
                                <div className="controls">
                                    <div className="table-data controls-col">
                                        <div className="content">
                                            <div className="controls">
                                                <button className="btn">
                                                    <span className="btn__text">Reclaim POOL</span>
                                                    <div className="btn__bg"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const AccordionStep2 = (props: AccordionCloseProps) => {
    const stepsState = useSteps()

    return (
        <div className="main-col">
            <button className="toggle-btn" onClick={() => props.close()}></button>
            <div className="ivest-state">
                <div className="table-data confirm-col">
                    <span className="title-col">Confirm allocation with POOL quantity</span>
                    <div className="content">
                        <div className="input-wrap">
                            <input className="input"/>
                        </div>
                        <span className="info">The commission amount is 25%</span>
                    </div>
                </div>
                <div className="table-data controls-col">
                    <div className="content">
                        <div className="controls">
                            <span className="controls__text">Approve your USDT bep20 to smart contract</span>
                            <button className="btn btn--green-light" id="btn-green" onClick={() => stepsState.next()}>
                                <span className="btn__text">Approve</span>
                                <div className="btn__bg"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AccordionStep3 = (props: AccordionCloseProps) => {
    const stepsState = useSteps()

    return (
        <div className="main-col">
            <button className="toggle-btn" onClick={() => props.close()}></button>
            <div className="ivest-state">
                <div className="table-data confirm-col">
                    <span className="title-col">Confirm allocation with POOL quantity</span>
                    <div className="content">
                        <div className="input-wrap">
                            <input className="input"/>
                        </div>
                        <span className="info">The commission amount is 25%</span>
                    </div>
                </div>
                <div className="table-data error-info-col">
                    <span className="title-col">1000 USDT</span>
                    <div className="content">
                        <span className="info-error">the maximum number of tokens available for investment</span>
                        <p className="text">Maximum allowed investment amount is calculated as total POOL staked +
                            total
                            POOL vesting locked. Where 1 POOL represents 1 USD in equivalent. Though you can
                            increase the amount by depositing POOL to this smart contract. You will be able to
                            reclaim POOL you've deposited once the investment round has finished (either
                            successfully or not)</p>
                    </div>
                </div>
                <div className="table-data controls-col">
                    <div className="content">
                        <div className="controls">
                            <span className="controls__text">Approve your USDT bep20 to smart contract</span>
                            <button className="btn btn--green-light" id="btn-green" onClick={() => stepsState.jump(1)}>
                                <span className="btn__text">Approve</span>
                                <div className="btn__bg"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type AccordionProps = {
    completed: number;
    timedOut: boolean;
    close?: () => void;
    projectInfo: any;
}

// render accordion heading
const renderTrigger = (isOpen: boolean, image: string) => {
    return (
        <>
            {!isOpen ? (
                <div className="table__body-card">
                    <button className="toggle-mobile-btn"></button>
                    <div className="table__head">
                        <div className="table__head-data company-col">
                            <div className="logo-wrap">
                                <img src={image} alt="" className="logo-img"/>
                            </div>
                            <div className="info">
                                <span className="info-title title-company">DeFiYield</span>
                            </div>
                        </div>
                        <div className="table__head-data round-col">
                            <span className="info-title">Round B, Price - 0.24$</span>
                        </div>
                        <div className="table__head-data vesting-col">
                            <div className="info">
                                <span className="info-title">5% TGE</span>
                                <span className="info__short">Then 10% monthly</span>
                            </div>
                        </div>
                        <div className="table__head-data ido-col">
                            <div className="controls">
                                <button className="btn">
                                    <span className="btn__text">Scan</span>
                                    <div className="btn__bg"></div>
                                </button>
                                <button className="toggle-btn"></button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

// accordion
export const Accordion = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => {
        setIsOpen(false)
    }

    return (
        <section className="table-new">
            <div className="container">
                <div className="table">
                    <div className="table__body">
                        <Collapsible
                            trigger={renderTrigger(isOpen, props.projectInfo.image)}
                            onOpening={() => setIsOpen(true)}
                            onClosing={() => setIsOpen(false)}
                            open={isOpen}
                        >
                            <div className="table__body-card table__body-card--open">
                                <button className="toggle-mobile-btn" onClick={() => setIsOpen(prev => !prev)}></button>

                                <div className="table__main">
                                    <div className="company-col">
                                        <div className="company-top">
                                            <div className="logo-wrap">
                                                <img src={props.projectInfo.image} alt="" className="logo"/>
                                            </div>
                                            <div className="info">
                                                <span className="info__title">{props.projectInfo.name}</span>
                                                <a href="#" target="_blank" className="info__link">{props.projectInfo.url}</a>
                                            </div>
                                        </div>
                                        <div className="about-info">
                                            <p className="about-info__text about-info__text--paragraph">{`${props.projectInfo.description}`}</p>
                                        </div>
                                        <div className="socials">
                                            <span className="socials__title">Social</span>
                                            <ul className="socials__list">
                                                <li className="socials__item">
                                                    <a className="socials__item-link" href="#">
                                                        <img src={InstagramIcon} alt=""
                                                             className="socials__item-img"/>
                                                    </a>
                                                </li>
                                                <li className="socials__item">
                                                    <a className="socials__item-link" href="#">
                                                        <img src={FacebookIcon} alt=""
                                                             className="socials__item-img"/>
                                                    </a>
                                                </li>
                                                <li className="socials__item">
                                                    <a className="socials__item-link" href="#">
                                                        <img src={TelegramIcon} alt=""
                                                             className="socials__item-img"/>
                                                    </a>
                                                </li>
                                                <li className="socials__item">
                                                    <a className="socials__item-link" href="#">
                                                        <img src={TwitterIcon} alt=""
                                                             className="socials__item-img"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <StepsProvider>
                                        <Steps>
                                            <AccordionStep1 completed={props.completed} timedOut={props.timedOut} close={close}  projectInfo={props.projectInfo} />
                                            <AccordionStep2 close={close} />
                                            <AccordionStep3 close={close} />
                                        </Steps>
                                    </StepsProvider>

                                </div>
                            </div>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </section>
    )
}
