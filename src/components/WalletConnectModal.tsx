import MetaMaskIcon from "../assets/images/src/payment-icon-MetaMask.svg";
import TrustWallet from "../assets/images/src/payment-icon-TrustWallet.svg";
import SafepallIcon from "../assets/images/src/payment-icon-Safepall.svg";


type Props = {
    isVisible: boolean
    setIsVisible: (visible: boolean) => void
    title: string
}

export const WalletConnectModal = (props: Props) => {
    return (
        <>
            {props.isVisible && (
                <div className="modal">
                    <div className="modal__inner">
                        <div className="modal__content">
                            <div className="modal__content-top">
                                <h3 className="title-modal">Подключить свой кошелек</h3>
                                <button className="close-btn" onClick={() => props.setIsVisible(false)}></button>
                            </div>
                            <div className="modal__content-body">
                                <ul className="list-payment">
                                    <li className="list-payment__item">
                                        <img className="list-payment__item-logo"
                                             src={MetaMaskIcon} alt="" />
                                        <span className="list-payment__item-text">MetaMask</span>
                                    </li>
                                    <li className="list-payment__item">
                                        <img className="list-payment__item-logo"
                                             src={TrustWallet} alt="" />
                                        <span className="list-payment__item-text">Trust Wallet</span>
                                    </li>
                                    <li className="list-payment__item">
                                        <img className="list-payment__item-logo"
                                             src={SafepallIcon} alt="" />
                                        <span className="list-payment__item-text">Safepall</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
