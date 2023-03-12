import classNames from "classnames/bind";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import style from './ProductDetail.module.scss';
import { policyTop, policyBottom } from "../../data/policy";
import { StoreContext } from '../../store';
import { addProductToCart } from '../../store/state/actions'
import config from "../../config";

const cx = classNames.bind(style);

const handlePriceStringToNumber = (value) => {
    const priceString = value;
    const removeLastCharInPrice = priceString.slice(0, priceString.length - 1);
    const removeDotsInPrice = removeLastCharInPrice.replace('.', '');
    const newPrice = removeDotsInPrice * 1;
    return newPrice;
}

const handleFormatPrice = (value) => {
    let price = new Intl.NumberFormat().format(value)
    return price += '.000đ'
}

function ProductItem() {

    const [, dispatch] = useContext(StoreContext);

    const [count, setCount] = useState(1);
    const [isDescMore, setIsDescMore] = useState(false);
    const [isDescLess, setIsDescLess] = useState(true);

    const location = useLocation();
    const data = location.state;

    const [totalPrice, setTotalPrice] = useState(handlePriceStringToNumber(data.price));

    // handle when comp mounted doccument always at the top
    useEffect(() => window.scroll({ top: 0 }), []);

    const handleDescMore = () => {
        setIsDescMore(true);
        setIsDescLess(false);
    };

    const handleDescLess = () => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth'
        });
        setIsDescLess(true);
        setIsDescMore(false);
    };

    const handleIncrease = () => {
        const price = handlePriceStringToNumber(data.price);
        setCount(count + 1);
        setTotalPrice(prev => prev + price)
    }

    const handleDecrease = () => {
        const price = handlePriceStringToNumber(data.price);
        if (count > 1) {
            setCount(count - 1)
            setTotalPrice(prev => prev - price)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content-left')}>
                    <img className={cx('img')} src={data.img} />
                    <div className={cx('infos')}>
                        <span className={cx('name')}>{data.name}</span>
                        <span className={cx('status')}> Tình trạng: <span>Còn hàng</span></span>
                        <span className={cx('price')}>{data.price}</span>
                        <div className={cx('quantity')}>
                            <button className={cx('decrease')} onClick={handleDecrease}>–</button>
                            <span className={cx('number')}>{count}</span>
                            <button className={cx('increase')} onClick={handleIncrease}>+</button>
                        </div>
                        <div className={cx('actions')}>
                            <Link to={config.cart}>
                                <button
                                    className={cx('add-to-cart')}
                                    onClick={() => {
                                        dispatch(addProductToCart({
                                            ...data,
                                            quantity: count,
                                            totalPrice: handleFormatPrice(totalPrice)
                                        }));
                                    }} >
                                    THÊM VÀO GIỎ
                                </button>
                            </Link>
                            <button className={cx('buy')}>MUA NGAY</button>
                        </div>
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('policy')}>
                        <div className={cx('policy-top')}>
                            <span className={cx('policy-top-text')}>YÊN TÂM MUA HÀNG</span>
                            <ul className={cx('policy-top-list')}>
                                {policyTop.map((policy, index) => (
                                    <li key={index} className={cx('policy-top-item')}>{policy}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx('policy-bottom')}>
                            <span className={cx('policy-bottom-text')}>MIỄN PHÍ GIAO HÀNG</span>
                            <ul className={cx('policy-bottom-list')}>
                                {policyBottom.map((policy, index) => (
                                    <li key={index} className={cx('policy-bottom-item')}>{policy}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className={cx('description')}>
                <span className={cx('description-text')}>Mô tả</span>
                <div className={cx('description-inner')}>
                    <div className={cx('content', { 'isMore': isDescMore })}>
                        <p className={cx('content-header')}>{data.details.desc_heading}</p>
                        <img className={cx('content-img')} src={data.details.desc_heading_img} />
                        {data.details.descs.map((desc, index) => (
                            <div key={index}>
                                <h2 className={cx('content-title')}>{desc.title}</h2>
                                <p className={cx('content-paragrap')}>{desc.content}</p>
                                <img className={cx('content-img')} src={desc.img} />
                            </div>
                        ))}
                    </div>
                    {isDescLess && <button className={cx('desc-more')} onClick={handleDescMore}>Xem Thêm</button>}
                    {isDescMore && <button className={cx('desc-less')} onClick={handleDescLess}>Ẩn bớt</button>}
                </div>
            </div>
        </div >
    )
}

export default ProductItem;