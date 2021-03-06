import MetaMaskIcon from "../assets/images/src/payment-icon-MetaMask.svg";
import ConnectWallet from "../assets/images/src/walletconnect.png";
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
                                <h3 className="title-modal">Connect Wallet</h3>
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
                                             src={ConnectWallet} alt="" />
                                        <span className="list-payment__item-text">Connect Wallet</span>
                                    </li>
                                    {/*<li className="list-payment__item">*/}
                                    {/*    <img className="list-payment__item-logo"*/}
                                    {/*         src={SafepallIcon} alt="" />*/}
                                    {/*    <span className="list-payment__item-text">Safepall</span>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
