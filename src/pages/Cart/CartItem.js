import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'

import { removeProduct, increase } from "../../store/state/actions";
import style from './Cart.module.scss';
import { StoreContext } from "../../store";


const cx = classNames.bind(style);

function CartItem({ item, index }) {

    const [, dispatch] = useContext(StoreContext);

    const [count, setCount] = useState(1);

    return (
        <div key={index} className={(cx('product-item'))}>
            <img src={item.img} />
            <div className={cx('product-infos')}>
                <span className={cx('name')}>{item.name}</span>
                <span className={cx('price')}>{item.price}</span>
                <div className={cx('quantity-and-total')}>
                    <div className={cx('quantity')}>
                        <button className={cx('decrease')} onClick={() => count > 1 && setCount(count - 1)}>–</button>
                        <span className={cx('number')}>{item.quantity}</span>
                        <button className={cx('increase')} onClick={() => dispatch(increase(index))}>+</button>
                    </div>
                    <div className={cx('total-price')}>{item.totalPrice}</div>
                </div>
            </div>
            <div className={cx('close')}
                onClick={() => dispatch(removeProduct(index))}
            >
                <AiOutlineClose />
            </div>
        </div >
    )
}
export default CartItem;