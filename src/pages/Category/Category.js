import classNames from "classnames/bind";
import { RxCaretDown } from 'react-icons/rx'
import { BsCart2 } from 'react-icons/bs'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import style from './Category.module.scss';
import FilterProduct from "./FilterProduct";
import {
    headphones,
    keyboards,
    laptops,
    mouses,
    smartphones,
    smartwatchs,
    tablets
} from "../../data/products";

const cx = classNames.bind(style);

function Category() {

    const location = useLocation();
    const category = location.state;

    const [data, setData] = useState([]);

    useEffect(() => {
        switch (category) {
            case 'Laptop':
                setData(laptops)
                break;
            case 'Smartphone':
                setData(smartphones)
                break;
            case 'Tablet':
                setData(tablets)
                break;
            case 'Smartwatch':
                setData(smartwatchs)
                break;
            case 'Headphone':
                setData(headphones)
                break;
            case 'Computer-Mouse':
                setData(mouses)
                break;
            case 'Keyboard':
                setData(keyboards)
                break;
            default:
                break;
        }
    })

    return (
        <div className={cx('wrapper')}>
            <div className='grid'>
                <div className='row'>
                    <div className='col-3'>
                        <FilterProduct />
                    </div>
                    <div className='col-9'>
                        <div className={cx('sort-product')}>
                            <span className={cx('sort-by')}>Sắp xếp theo: </span>
                            <div className={cx('sort-list')}>
                                Mặc định <RxCaretDown className={cx('caret-down')} />
                            </div>
                        </div>
                        <div className={cx('product-list')}>
                            <div className='row'>
                                {data.map((item) => (
                                    <div key={item.id} className='col-3'>
                                        <Link to={`${location.pathname}/${item.name}`} state={item}>
                                            <div className={cx('product-item')}>
                                                <img src={item.img} />
                                                <div className={cx('product-info')}>
                                                    <span className={cx('product-name')}>{item.name}</span>
                                                    <span className={cx('price')}>{item.price}</span>
                                                </div>
                                                <div className={cx('add-to-cart')}><BsCart2 /></div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category;