import DefiBanner from '../assets/images/src/main-section-img.png'
import TokenPriceIcon from '../assets/images/src/token-price-icon.svg'
import SatifyIcon from '../assets/images/src/safety-icon.svg'
import SelectionIcon from '../assets/images/src/selection-icon.svg'
import SvgEditorImage from '../assets/images/src/svg-editor-image.svg'
import Arrow from '../assets/images/src/arrow.svg'
import UsdtIcon from '../assets/images/src/usdt-icon.svg'
import PoolIcon from '../assets/images/src/pool-icon.svg'
import ChartImage from '../assets/images/src/chart-image.svg'
import BurgerIcon from '../assets/images/src/burger.svg'

import '../js/app'
import '../assets/css/App_crm.css'
import '../assets/css/App.css'
import '../assets/css/tabs.css'


import {Link} from "react-router-dom";

// dummy charts and logos
import CpollLogo from '../assets/images/src/company-logos/cpool-logo.png'
import ErthaLogo from '../assets/images/src/company-logos/ertha-logo.png'
import SidusLogo from '../assets/images/src/company-logos/sidus-logo.png'
import SenateLogo from '../assets/images/src/company-logos/senate-logo.png'
import VRLogo from '../assets/images/src/company-logos/vr-logo.png'
import CWARLogo from '../assets/images/src/company-logos/cwar-logo.png'
import {useState} from "react";
import {WalletConnectModal} from "../components/WalletConnectModal";
import WalletIcon from "../assets/crm_images/src/wallet-icon.svg";
import {Chart} from "../components/chart/Chart";
import useAxios from "axios-hooks";

// without ts types
// @ts-ignore
// import {Tab, Tabs} from "react-tabify";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {ChartLabel} from "../components/chart/ChartLabel";
import {parseImageUrl} from "../utils/utils";

export const Home = () => {
    const [isConnectWalletModalVisible, setIsConnectWalletModalVisible] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState(0)

    const [usdt, setUsdt] = useState(0)
    let usdtInPool = usdt * 3.5

    // pre ido
    const [{data, loading, error}, refetch] = useAxios({
        url: "https://backendapi.site/defi/defipool/preido_history/?format=json"
    })

    if (loading) return <p></p>

    return (
        <div>
            <WalletConnectModal isVisible={isConnectWalletModalVisible} title={"Connect Wallet"}
                                setIsVisible={setIsConnectWalletModalVisible}/>
            <div className="overlay d-none" id="overlay"></div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__inner-wallet">
                            <button className="wallet-connect d-block" d-block d-sm-none
                                    onClick={() => setIsConnectWalletModalVisible(true)}>
                                Connect Wallet
                            </button>
                        </div>


                        <nav className="menu d-none d-sm-flex">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a className="menu__link" href="#about" title="About DeFi pool">About DeFi pool</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="#history" title="History">History</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="#exchange" title="Exchange">Exchange</a>
                                </li>
                            </ul>
                        </nav>


                        <div className="open-btn open d-block d-sm-none" id="open-btn">
                            <div className={"open-btn--mobile"}>
                                <img src={BurgerIcon} style={{width: 30, marginLeft: 20}}
                                     onClick={() => setIsMobileMenuOpen(true)}/>
                            </div>
                        </div>

                        <nav className={`menu-mobile ${!isMobileMenuOpen ? "closed" : "open"} d-block d-sm-none`}
                             id="menu-mobile">
                            <button className={`close-btn ${!isMobileMenuOpen ? "closed" : "open"}`}
                                    onClick={() => setIsMobileMenuOpen(false)} id="close-btn">
                                <div className="close-btn__line"></div>
                            </button>
                            <span className="menu-mobile__title">Menu</span>
                            <ul className="menu-mobile__list">
                                <li className="menu-mobile__item"><a href="#about" className="menu-mobile__link">About
                                    DeFi pool</a></li>
                                <li className="menu-mobile__item"><a href="#history"
                                                                     className="menu-mobile__link">History</a></li>
                                <li className="menu-mobile__item"><a href="#exchange"
                                                                     className="menu-mobile__link">Exchange</a></li>
                            </ul>
                            <div className="social-links">
                                <a target="_blank" href="https://t.me/defipoolspace" className="social-links__item"
                                   title="Telegram">
                                    <svg className="social-links__img" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"/>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://twitter.com/defipool_" className="social-links__item"
                                   title="Twitter">
                                    <svg className="social-links__img" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_0_259)">
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
                    </div>
                </div>
            </header>
            <section className="main-section">
                <div className="container">
                    <div className="main-section__inner">
                        <div className="content">
                            <h1 className="content__title title">
                                DeFi pool<br/>
                                invest in pre IDO
                            </h1>
                            <div className="content__actions">
                                <Link to={"/invest"} className="content__actions-btn"><span>Sign in</span></Link>
                            </div>
                            <div className="content__social social-links d-none d-sm-flex">
                                <a target="_blank" href="https://t.me/defipoolspace" className="social-links__item"
                                   title="Telegram">
                                    <svg className="social-links__img" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"/>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://twitter.com/defipool_" className="social-links__item"
                                   title="Twitter">
                                    <svg className="social-links__img" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_0_259)">
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
                        </div>
                        <div className="main-img">
                            <img className="main-img__image" src={DefiBanner} alt="main-image"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="presale">
                <div className="container">
                    <div className="presale__inner">
                        <h2 className="title">Pre IDO on DeFi pool</h2>
                        <h3 className="desc">Pre IDO is the earliest stage of the token sale, even before the IDO. There
                            are several rounds of closed sales (seed, private) where, as a rule, angels and large
                            communities start pools</h3>
                        <div className="cards-wrap">
                            <div className="cards">
                                <div className="cards__item">
                                    <div className="cards__item-image-wrap">
                                        <img src={TokenPriceIcon} alt=""/>
                                    </div>
                                    <h4 className="cards__item-title">Token price is lower than IDO</h4>
                                    <p className="cards__item-desc">Pre IDO provides the same price at which funds enter
                                        the project</p>
                                </div>
                                <div className="cards__item">
                                    <div className="cards__item-image-wrap">
                                        <img src={SatifyIcon} alt=""/>
                                    </div>
                                    <h4 className="cards__item-title">Convenience and safety</h4>
                                    <p className="cards__item-desc">The platform allows you to analyze a project and
                                        keep records of your investments, providing all the necessary information.
                                        Investors' assets are protected by smart contracts, and due to their work an
                                        investor receives tokens after unlocking personally, which makes such
                                        investments safe</p>
                                </div>
                                <div className="cards__item">
                                    <div className="cards__item-image-wrap">
                                        <img src={SelectionIcon} alt=""/>
                                    </div>
                                    <h4 className="cards__item-title">The best selection of project</h4>
                                    <p className="cards__item-desc">Our team selects only the most promising projects,
                                        analyzing a product, tokenomics, team, marketing, as well as checking
                                        partnerships and conducting due diligence of the company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about" id="about">
                <div className="container">
                    <div className="about__inner">
                        <h2 className="title">About DeFi pool</h2>
                        <div className="content">
                            <div className="content__desc">
                                {/*<p className="content__desc-text">DeFi pool is the first platform in the world that*/}
                                {/*    allows you to start a pool through smart contracts and distribute the received*/}
                                {/*    tokens after vesting to investors' wallets. The platform is supported by dozens of*/}
                                {/*    smart contracts operating on different networks - Ethereum, BSC, Polygon, Arbitrum,*/}
                                {/*    Optimism, xDai, Phantom, Avalanche. Solana will be added soon. Instead of signing*/}
                                {/*    SAFT, DeFi pool uses a secure transaction, where for each new project the platform*/}
                                {/*    issues a smart contract responsible for starting pools. When filling a pool, a*/}
                                {/*    startup sends its tokens to the smart contract, while investors send their*/}
                                {/*    stablecoins. As soon as the pool is filled, tokens go to the vesting contract (which*/}
                                {/*    is automatically released by the platform), and stablecoins go to the startup*/}
                                {/*    address. If the pool is not filled, the startup receives its tokens back, and the*/}
                                {/*    investors get their stablecoins</p>*/}
                                <p className={"content__desc-text"}>
                                    {'You don’t have to send assets to trust or private investors who fill pools. The DeFi pool platform allows you to directly invest in a project in a private round and to be a direct recipient of tokens after they are unfrozen.' +
                                        '\r\n\nDozens of smart contracts, which are responsible for assets collection and allocation, support the DeFi platform which works on different blockchains : Ethereum, Bsc, Polygon, Arbitrum, Optimism, xDai, Phantom, Avalanche, Solana. ' +
                                        '\r\n\nWith each unlock, the total number of tokens is sent to the platform address, after that you can get your coins by connecting the wallet, which participated in filling the pool, to it.'}
                                </p>
                            </div>
                            <div className="content__image">
                                <img src={SvgEditorImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="graph" id="history">
                <Tabs onSelect={index => setSelectedTab(index)}>
                    <div className="container">
                        <div className="graph__inner">
                            <h2 className="title">Recent projects history</h2>
                            <div className="chart-wrap">
                                <div className="chart">
                                    <div className="chart__names">
                                        <ul className="chart__list">
                                            <TabList>
                                                {data.map((el: any, index: number) => (
                                                    <Tab>
                                                        <ChartLabel
                                                            name={el.name}
                                                            image={parseImageUrl(el.image)}
                                                            active={selectedTab == index}
                                                            style={{
                                                            }}
                                                        />
                                                    </Tab>
                                                ))}
                                            </TabList>
                                        </ul>
                                    </div>

                                    {data.map((el: any) => (
                                        <TabPanel>
                                            <Chart
                                                name={el.name}
                                                image={parseImageUrl(el.image)}
                                                profit={el.profit}
                                                private_price={el.private_price}
                                                entry_price={el.entry_price}
                                                entry_date={el.entry_date}
                                                price_token_today={el.price_token_today}
                                                price_today={el.price_today}
                                            />
                                        </TabPanel>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </section>
            <section className="exchange" id="exchange">
                <div className="container">
                    <div className="exchange__inner">
                        <h2 className="title">Exchange</h2>
                        <div className="converter-wrap">
                            <div className="converter">
                                <div className="currency">
                                    <label htmlFor="converter_input_from" className="currency__name">
                                        <img src={UsdtIcon} alt="busd-icon"/>
                                        <span>USDT bep20</span>
                                    </label>
                                    <input id="converter_input_from" className="currency__input"
                                           onChange={(v) => setUsdt(parseFloat(v.target.value))} value={usdt}
                                           type="number" min="0"/>
                                </div>
                                <button className="converter__btn-arrow" title="change convert">
                                    <img src={Arrow} alt=""/>
                                </button>
                                <div className="currency">
                                    <label htmlFor="converter_input_to" className="currency__name">
                                        <img src={PoolIcon} alt="pool-icon"/>
                                        <span>POOL</span>
                                    </label>
                                    <input id="converter_input_to" value={usdtInPool} className="currency__input"
                                           type="number" min="0"/>
                                </div>
                                <button className="converter__btn" type="submit" title="Exchange"
                                        id="exchange-btn">Exchange
                                </button>
                            </div>
                        </div>
                        <p className="info-text">To participate in pre IDO it is required to have native tokens of the
                            platform, one POOL token gives 1$ allocation in any projects on DeFi pool</p>
                    </div>
                </div>
            </section>
            <section className="apply">
                <div className="container">
                    <div className="apply__inner">
                        <h2 className="title">Become a venture investor now</h2>
                        <div className="controls">
                            <Link to={"/invest"} className="controls__btn">Sign in</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
