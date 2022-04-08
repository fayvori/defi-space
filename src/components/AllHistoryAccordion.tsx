import '../assets/css/App.css'
import '../assets/css/App_crm.css'

import PascalLogo from '../assets/crm_images/src/logo-cur-1.png'
import PascalLogoBig from '../assets/crm_images/src/logo-cur-1-4x.png'
import BinanceLogo from '../assets/crm_images/src/binange-icon.png'
import SigenLogo from '../assets/crm_images/src/sigen.pro-icon.png'
import HotbitLogo from '../assets/crm_images/src/hotbit-icon.png'

// social icons
import InstagramIcon from '../assets/crm_images/src/instagram-icon.svg'
import FacebookIcon from '../assets/crm_images/src/facebook-icon.svg'
import TelegramIcon from '../assets/crm_images/src/telegram-icon.svg'
import TwitterIcon from '../assets/crm_images/src/twitter-icon.svg'
import YouTubeIcon from '../assets/crm_images/src/youtube-icon.svg'
import DiscordIcon from '../assets/crm_images/src/discord-icon.svg'
import LinkedinIcon from '../assets/crm_images/src/linkedin-icon.svg'
import VkIcon from '../assets/crm_images/src/vk-icon.svg'

import Collapsible from "react-collapsible";
import {useState} from "react";
import {parseImageUrl} from "../utils/utils";

const renderTrigger = (isOpen: boolean, projInfo: any) => {
    const image = parseImageUrl(projInfo.image)

    return (
        <>
            {!isOpen ? (
                <div className="table-card table-card">
                    <button className="toggle-mobile-btn"></button>
                    <div className="table__body-head">
                        <div className="table__head table__head--min">
                            <div className="table__head-data tokens-col">
                                <div className="logo-wrap">
                                    <img src={image} alt="" style={{
                                        maxWidth: 55,
                                        maxHeight: 55
                                    }}/>
                                </div>
                                <div className="info">
                                    <span className="info-title">{`${projInfo.name}`}</span>
                                    <span className="info__short">{`${projInfo.short_name}`}</span>
                                </div>
                            </div>
                            <div className="table__head-data amount-col">
                                <span className="info-title">{`$296,898 ${projInfo.short_name}`}</span>
                            </div>
                            <div className="table__head-data value-col">
                                <span className="info-title">$4,360</span>
                            </div>
                            <div className="table__head-data buy-price-col">
                                <span className="info-title">{`$${projInfo.buy_price}`}</span>
                            </div>
                            <div className="table__head-data vesting-col">
                                <span className="info-title">{`${projInfo.vesting_months} months`}</span>
                            </div>
                            <div className="table__head-data tge-col">
                                <span className="info-title"></span>
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

export const AllHistoryAccordion = (props: any) => {
    const [isOpen, setIsOpen] = useState(false)

    const image = parseImageUrl(props.projInfo.image)

    const close = () => {
        setIsOpen(false)
    }

    return (
        <section className="table-potfolio table-section">
            <div className="container">
                <div className="table">
                    <Collapsible
                        trigger={renderTrigger(isOpen, props.projInfo)}
                        onOpening={() => setIsOpen(true)}
                        onClosing={() => setIsOpen(false)}
                        open={isOpen}
                    >
                        <div className="table__body">
                            <div className="table-card table-card--open">
                                <button className="toggle-mobile-btn" onClick={() => setIsOpen(false)}></button>
                                <div className="table__body-head">
                                    <div className="table__head">
                                        <div className="table__head-data">
                                            <div className="logo-wrap">
                                                <img src={PascalLogo} alt="" className="logo"/>
                                            </div>
                                            <div className="info">
                                                <span className="info-title">{`${props.projInfo.name}`}</span>
                                                <span className="info__short">{`${props.projInfo.short_name}`}</span>
                                            </div>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">{`79,357 ${props.projInfo.short_name}`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">$4,360</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">{`$${props.projInfo.buy_price}`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">{`${props.projInfo.vesting_months} months`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="info-title">{`${props.projInfo.vesting_percent}`}</span>
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
                                                <span className="info-title">{`${props.projInfo.name}`}</span>
                                                <span className="info__short">{`${props.projInfo.short_name}`}</span>
                                            </div>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">{`79,357 ${props.projInfo.short_name}`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">$4,360</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">{`$${props.projInfo.buy_price}`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">{`${props.projInfo.vesting_months} months`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <span className="text">{`${props.projInfo.vesting_percent}%`}</span>
                                        </div>
                                        <div className="table__head-data">
                                            <div className="controls">
                                                <button className="toggle-btn" onClick={() => setIsOpen(false)}></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table__main">
                                        <div className="table__main-data tokens-col">
                                            <span className="title-col">Tokens</span>
                                            <div className="content">
                                                <span className="text">{`${props.projInfo.name}`}</span>
                                                <span className="text">{`${props.projInfo.short_name}`}</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data amount-col">
                                            <span className="title-col">Amount</span>
                                            <div className="content">
                                                <span className="text">{`79,357 ${props.projInfo.short_name}`}</span>
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
                                                <span className="text">{`$${props.projInfo.buy_price}`}</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data vesting-top-col">
                                            <span className="title-col">Vesting</span>
                                            <div className="content">
                                                <span className="text">{`${props.projInfo.vesting_months} months`}</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data tge-col">
                                            <span className="title-col">{`${props.projInfo.vesting_tag.name}`}</span>
                                            <div className="content">
                                                <span className="text">{`${props.projInfo.tge_percent}%`}</span>
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
                                                <span className="text">{`${props.projInfo.blockchain.name}`}</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data info-col">
                                            <span className="title-col">Info</span>
                                            <div className="content">
                                                <span className="text">{`${props.projInfo.info}`}</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data analysis-col">
                                            <span className="title-col">&#8195;</span>
                                        </div>
                                        <div className="table__main-data vesting-col">
                                            <span className="title-col">Vesting</span>
                                            <div className="content">
                                                <span className="text">{`${props.projInfo.vesting_percent}% ${props.projInfo.vesting_tag.name}`}</span>
                                                <span className="text">{`Then ${props.projInfo.percent_monthly}% monthly`}</span>
                                            </div>
                                        </div>
                                        {/*<div className="table__main-data profit-col">*/}
                                        {/*    <span className="title-col">Token locked</span>*/}
                                        {/*    <div className="content">*/}
                                        {/*        <span className="text">$2,294 (43%)</span>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="table__main-data next-unlock-col">
                                            <span className="title-col">Next unlock</span>
                                            <div className="content">
                                                <span className="text">{`${props.projInfo.next_unlock_months} months left`}</span>
                                            </div>
                                        </div>
                                        <div className="table__main-data token-locked-col">
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
                                                    {props.projInfo.instagram_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.instagram_link}>
                                                                <img className="socials__item-img"
                                                                     src={InstagramIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.facebook_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.facebook_link}>
                                                                <img className="socials__item-img"
                                                                     src={FacebookIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.telegram_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.telegram_link}>
                                                                <img className="socials__item-img"
                                                                     src={TelegramIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.twitter_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.twitter_link}>
                                                                <img className="socials__item-img"
                                                                     src={TwitterIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.youtube_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.youtube_link}>
                                                                <img className="socials__item-img"
                                                                     src={YouTubeIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.discord_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.discord_link}>
                                                                <img className="socials__item-img"
                                                                     src={DiscordIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.linkedin_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.linkedin_link}>
                                                                <img className="socials__item-img"
                                                                     src={LinkedinIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
                                                    {props.projInfo.vk_link != "-" && (
                                                        <li className="socials__item">
                                                            <a className="socials__item-link" target="_blank" href={props.projInfo.vk_link}>
                                                                <img className="socials__item-img"
                                                                     src={VkIcon} alt=""/>
                                                            </a>
                                                        </li>
                                                    )}
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
                                                           href={props.projInfo.dex_link}>
                                                            <span className="btn__text">Exchange</span>
                                                            <div className="btn__bg"></div>
                                                        </a>
                                                    </div>
                                                    <div className="controls-list__item">
                                                        <a className="btn controls-list__item-btn" target="_blank"
                                                           href={props.projInfo.live_chat_link}>
                                                            <span className="btn__text">Live chart</span>
                                                            <div className="btn__bg"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="logo-company" src={image} />
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
