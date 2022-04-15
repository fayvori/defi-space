import {Accordion} from "../components/Accordion";
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import WalletIcon from '../assets/crm_images/src/wallet-icon.svg'
import BurgerIcon from '../assets/images/src/burger.svg'

import {CurrencyAccordion} from "../components/CurrencyAccordion";
import {CurrencyMyPortfolioTab} from "../components/tabs/CurrencyMyPortfolioTab";
import {InvestProjectTab} from "../components/tabs/InvestProjectTab";
import {AllHistoryTab} from "../components/tabs/AllHistoryTab";
import '../assets/css/App.css'
import '../assets/css/invest-tabs.css'
import {useState} from "react";
import {WalletConnectModal} from "../components/WalletConnectModal";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Invest = () => {
    // window width and height
    const { width, height } = useWindowDimensions()

    const [selectedTab, setSelectedTab] = useState(0)
    const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const wallet = localStorage.getItem("wallet")

    console.log("wallet", wallet)

    return (
       <div className={"invest__screen-container"}>
           <Tabs className={"menu__list"} onSelect={index => setSelectedTab(index)}>
               <WalletConnectModal isVisible={isConnectWalletVisible} setIsVisible={setIsConnectWalletVisible}
                                   title={"Connect Wallet"}/>
               <div>
                   <section className="navigation">
                       <div>
                           <div className="navigation-top">
                               {/*<div className="container-new header__invest">*/}
                               {/*<div className="navigation-top__left">*/}
                               {/*    /!*<Link className="btn" to={"/"}>*!/*/}
                               {/*    /!*    <span className="btn__text">Disconnect</span>*!/*/}
                               {/*    /!*    <div className="btn__bg"></div>*!/*/}
                               {/*    /!*</Link>*!/*/}
                               {/*    <div className="header__inner-invest">*/}
                               {/*        <button className="wallet-connect d-block" d-block d-sm-none*/}
                               {/*                onClick={() => setIsConnectWalletVisible(true)}>*/}
                               {/*            Connect Wallet*/}
                               {/*        </button>*/}
                               {/*    </div>*/}
                               {/*</div>*/}
                               {/*<div className="navigation-top__right">*/}
                               {/*    <div className="wallet">*/}
                               {/*        <img src={WalletIcon} alt="" className="wallet__img"/>*/}
                               {/*        <span className="wallet__text">0xb2c6...ff92</span>*/}
                               {/*    </div>*/}
                               {/*</div>*/}

                               <header className="header container-new">
                                   <div>
                                       <div className={`header__inner ${width > 1440 && "container-new"}`} style={{
                                           maxWidth: 1440,
                                           margin: "0 auto",
                                           marginTop: 20
                                       }}>
                                           <div className="header__inner-wallet">
                                               <button className="wallet-connect d-block" d-block d-sm-none
                                                       onClick={() => setIsConnectWalletVisible(true)}>
                                                   Connect Wallet
                                               </button>
                                           </div>


                                           <nav className="menu d-none d-sm-flex">
                                               {/*<ul className="menu__list">*/}
                                               {/*    <li className="menu__item">*/}
                                               {/*        <a className="menu__link" href="#about" title="About DeFi pool">About DeFi pool</a>*/}
                                               {/*    </li>*/}
                                               {/*    <li className="menu__item">*/}
                                               {/*        <a className="menu__link" href="#history" title="History">History</a>*/}
                                               {/*    </li>*/}
                                               {/*    <li className="menu__item">*/}
                                               {/*        <a className="menu__link" href="#exchange" title="Exchange">Exchange</a>*/}
                                               {/*    </li>*/}
                                               {/*</ul>*/}

                                               <TabList className={"menu__list"}>
                                                   <Link to={"/"} className={"menu__item menu__link"}>Home</Link>
                                                   <Tab
                                                       className={`menu__item menu__link ${selectedTab == 0 ? "menu__link-active" : ""}`}>New</Tab>
                                                   <Tab
                                                       // disabled={wallet == null}
                                                       className={`menu__item menu__link ${selectedTab == 1 ? "menu__link-active" : ""}`}>My
                                                       portfolio</Tab>
                                                   <Tab
                                                       className={`menu__item menu__link ${selectedTab == 2 ? "menu__link-active" : ""}`}>All
                                                       history</Tab>
                                               </TabList>
                                           </nav>

                                           <div className="open-btn open d-block d-sm-none" id="open-btn">
                                               <div className={"open-btn--mobile"} style={{ marginTop: wallet == null ? 4 : -4 }}>
                                                   <div className="navigation-top__right-mobile">
                                                       {wallet != null ? (
                                                           <div className="wallet">
                                                               <img src={WalletIcon} alt="" className="wallet__img"/>
                                                               <span className="wallet__text">{wallet.toString()}</span>
                                                           </div>
                                                       ) : <div className={"wallet-not__connected-mobile"}></div>}
                                                   </div>
                                                   {/*<button style={{width: 30, marginLeft: 20}} className="open-btn__line"*/}
                                                   {/*        onClick={() => setIsMobileMenuOpen(true)}></button>*/}

                                                   <img src={BurgerIcon} style={{width: 30, marginLeft: 20}} onClick={() => setIsMobileMenuOpen(true)} />
                                               </div>
                                           </div>
                                           <nav
                                               className={`menu-mobile ${!isMobileMenuOpen ? "closed" : "open"} d-block d-sm-none`}
                                               id="menu-mobile">

                                               <button className={`close-btn ${!isMobileMenuOpen ? "closed" : "open"}`}
                                                       onClick={() => setIsMobileMenuOpen(false)} id="close-btn">
                                                   <div className="close-btn__line"></div>
                                               </button>
                                               <span className="menu-mobile__title">Menu</span>

                                               <div className={"mobile__menu-invest"}>
                                                   <TabList>
                                                       <Link style={{ marginTop: 10 }} to={"/"} className={"menu__item menu__link"}>Home</Link>
                                                       <Tab
                                                           style={{ marginLeft: 0, fontWeight: "200" }}
                                                           className={`menu__item menu__link ${selectedTab == 0 ? "menu__link-active-mobile" : ""}`}>New</Tab>
                                                       <Tab
                                                           style={{ marginLeft: 0, fontWeight: "200" }}
                                                           className={`menu__item menu__link ${selectedTab == 1 ? "menu__link-active-mobile" : ""}`}>
                                                           My portfolio</Tab>
                                                       <Tab
                                                           style={{ marginLeft: 0, fontWeight: "200" }}
                                                           className={`menu__item menu__link ${selectedTab == 2 ? "menu__link-active-mobile" : ""}`}>All
                                                           history</Tab>
                                                   </TabList>
                                               </div>

                                               <div className="social-links">
                                                   <a target="_blank" href="https://t.me/defipoolspace"
                                                      className="social-links__item"
                                                      title="Telegram">
                                                       <svg className="social-links__img" width="24" height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                           <path fill-rule="evenodd" clip-rule="evenodd"
                                                                 d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"/>
                                                       </svg>
                                                   </a>
                                                   <a target="_blank" href="https://twitter.com/defipool_"
                                                      className="social-links__item"
                                                      title="Twitter">
                                                       <svg className="social-links__img" width="24" height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                           <g clip-path="url(#clip0_0_259)">
                                                               <path
                                                                   d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"/>
                                                           </g>
                                                           <defs>
                                                               <clipPath id="clip0_0_259">
                                                                   <rect width="24" height="24" fill="white"/>
                                                               </clipPath>
                                                           </defs>
                                                       </svg>
                                                   </a>
                                               </div>
                                           </nav>

                                           {wallet != null ? (
                                               <div className="navigation-top__right-pc">
                                                   <div className="wallet">
                                                       <img src={WalletIcon} alt="" className="wallet__img"/>
                                                       <span className="wallet__text">{wallet.toString()}</span>
                                                   </div>
                                               </div>
                                           ) : <div className={"wallet-not__connected"}></div>}
                                       </div>
                                   </div>
                               </header>

                           </div>
                       </div>
                       <div className="navigation-bottom">
                           <div className="navigation-bottom__left">
                               <nav className="menu">
                                   <ul className="menu__list">
                                       {/*<Tab className={`menu__item ${selectedTab == 0 ? "menu__item--active" : ""} menu__link`}>New</Tab>*/}
                                       {/*<Tab className={`menu__item ${selectedTab == 1 ? "menu__item--active" : ""} menu__link`} disabled={false}>My portfolio</Tab>*/}
                                       {/*<Tab className={`menu__item ${selectedTab == 2 ? "menu__item--active" : ""} menu__link`}>All history</Tab>*/}
                                   </ul>
                               </nav>
                           </div>
                           <div className="navigation-bottom__right">
                               {/*<div className="profit-info">*/}
                               {/*    <p className="profit-info__title">Total profit</p>*/}
                               {/*    <p className="profit-info__content">*/}
                               {/*        <span className="profit-info__content-price">$46,817</span>*/}
                               {/*        <span className="profit-info__content-percent">59%</span>*/}
                               {/*    </p>*/}
                               {/*</div>*/}
                               {/*<div className="header__inner">*/}
                               {/*    <button className="wallet-connect d-block" d-block d-sm-none*/}
                               {/*            onClick={() => setIsConnectWalletVisible(true)}>*/}
                               {/*        Connect Wallet*/}
                               {/*    </button>*/}
                               {/*</div>*/}
                               {/*<div className="navigation-bottom__right">*/}
                               {/*    <div className="profit-info">*/}
                               {/*        <p className="profit-info__title">Total profit</p>*/}
                               {/*        <p className="profit-info__content">*/}
                               {/*            <span className="profit-info__content-price">$46,817</span>*/}
                               {/*            <span className="profit-info__content-percent">59%</span>*/}
                               {/*        </p>*/}
                               {/*    </div>*/}
                               {/*</div>*/}
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
               </div>
           </Tabs>
       </div>
    )
}
