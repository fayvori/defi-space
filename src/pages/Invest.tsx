import {Accordion} from "../components/Accordion";
import {Link} from 'react-router-dom'

import WalletIcon from '../assets/crm_images/src/wallet-icon.svg'

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
    return (
        <>
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
                                    <li className="menu__item menu__item--active">
                                        <a href="#" className="menu__link menu__link">New</a>
                                    </li>
                                    <li className="menu__item">
                                        <a href="#" className="menu__link menu__link">My porfolio</a>
                                    </li>
                                    <li className="menu__item menu__item">
                                        <a href="#" className="menu__link">All history</a>
                                    </li>
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
                {accordions.map(el => (
                    <Accordion completed={el.completed} timedOut={el.timedOut} />
                ))}
            </section>
        </>
    )
}
