import { BsCart2 } from 'react-icons/bs'
import classNames from "classnames/bind";
import style from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { addProductToCart } from '../../store/state/actions';

const cx = classNames.bind(style);

function ProductItem({ data, width = 200, height = 200 }) {

    const [, dispatch] = useContext(StoreContext);

    return (
        <Link to={`/${data.name}`} state={data}>
            <div className={cx('wrapper')}>
                <img width={width} height={height} src={data.img} />
                <div className={cx('info')}>
                    <span className={cx('name')}>{data.name}</span>
                    <span className={cx('price')}>{data.price}</span>
                </div>
                <div className={cx('add-to-cart')}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(addProductToCart(data));
                    }}>
                    <BsCart2 />
                </div>
            </div>
        </Link>
    )
}
export default ProductItem;