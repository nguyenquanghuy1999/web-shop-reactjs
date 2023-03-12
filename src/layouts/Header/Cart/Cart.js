import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import style from './Cart.module.scss';
import { CartIcon } from '../../../components/Icons'
import config from "../../../config";
import { StoreContext } from "../../../store";
import { removeProduct } from "../../../store/state/actions";


const cx = classNames.bind(style);

function Cart() {

    const [state, dispatch] = useContext(StoreContext);

    const [isCartList, setIsCartList] = useState(false);

    useEffect(() => state?.cartItems?.length > 0 ? setIsCartList(true) : setIsCartList(false), [state]);

    return (
        <Tippy
            interactive
            placement="bottom"
            offset={[-150, 10]}
            render={attrs => (
                <div className={cx('cart-inner')}  {...attrs}>
                    {isCartList ?
                        <>
                            <div className={cx('cart-list')}>
                                {state?.cartItems.map((item, index) => (
                                    <div key={index} className={cx('cart-item')}>
                                        <img className={cx('img')} src={item?.img} />
                                        <div className={cx('infos')}>
                                            <span className={cx('name')}>{item?.name}</span>
                                            <div className={cx('quantity-and-price')}>
                                                <span className={cx('quantity')}>{`Số lượng: ${item.quantity}`}</span>
                                                <span className={cx('price')}>{item?.totalPrice}</span>
                                            </div>
                                            <span className={cx('remove')} onClick={() => dispatch(removeProduct(index))}>Xóa</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('cart-total-price')}>
                                <span className={cx('total-price-text')}>Thành tiền</span>
                                <span className={cx('total-price')}>{state?.totalPrice}</span>
                            </div>
                            <Link to={config.cart}> <button className={cx('view-cart-btn')}>Xem giỏ hàng</button></Link>
                        </>
                        :
                        (
                            <div className={cx('cart-empty')}>
                                <img className={cx('no-cart-img')} src={require('../../../assets/images/no-cart.png')} />
                                <span className={cx('cart-title')}>Giỏ hàng của bạn đang trống!</span>
                            </div>
                        )
                    }
                </div>
            )}>
            <Link to={config.cart}>
                <div className={cx('wrapper')}>
                    <CartIcon />
                    <span className={cx('total')}>{state?.cartLength}</span>
                </div>
            </Link>
        </Tippy>
    )
}
export default Cart;