import classNames from "classnames/bind";
import style from './FilterProduct.module.scss';

const cx = classNames.bind(style);

function FilterProduct() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>Lọc</h3>
            <ul className={cx('list')}>
                <span className={cx('title')}>Giá</span>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Dưới 1 triệu</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Từ 1 đến 2 triệu</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Từ 2 đến 4 triệu</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Từ 4 đến 6 triệu</span>
                </li>
            </ul>
            <ul className={cx('list')}>
                <span className={cx('title')}>Bộ nhớ</span>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>256GB</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>128GB</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>64GB</span>
                </li>
            </ul>
            <ul className={cx('list')}>
                <span className={cx('title')}>Màu sắc</span>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Vàng</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Đỏ</span>
                </li>
                <li className={cx('item')}>
                    <input type='checkbox' />
                    <span className={cx('item-title')}>Trắng</span>
                </li>
            </ul>
        </div>
    )
}
export default FilterProduct;