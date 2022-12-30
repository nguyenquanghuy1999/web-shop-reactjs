import classNames from "classnames/bind";
import { RxCaretDown } from 'react-icons/rx'
import { BsCart2 } from 'react-icons/bs'

import style from './Category.module.scss';
import FilterProduct from "./FilterProduct";

const cx = classNames.bind(style);

function Category() {
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
                                <div className='col-3'>
                                    <div className={cx('product-item')}>
                                        <img src='https://vmart.exdomain.net/image/cache/catalog/evo/xps-13-9310-228x228.jpg' />
                                        <div className={cx('product-info')}>
                                            <span className={cx('product-name')}>Laptop Dell XPS 13 9310 i5 1135G7/8GB/256GB/13.4</span>
                                            <span className={cx('price')}>42,990,000đ</span>
                                        </div>
                                        <div className={cx('add-to-cart')}><BsCart2 /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category;