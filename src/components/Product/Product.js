import classNames from "classnames/bind";
import style from './Product.module.scss';

const cx = classNames.bind(style);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('heading')}>Laptop</h3>
                <ul className={cx('types')}>
                    <li className={cx('type')}>Laptop Asus</li>
                    <li className={cx('type')}>Laptop Dell</li>
                    <li className={cx('type')}>Laptop HP</li>
                    <li className={cx('type')}>Laptop Lenovo</li>
                </ul>
            </div>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-3')}>
                        <img src="https://vmart.exdomain.net/image/cache/catalog/vmart/banner/banner_tab_1_1-280x374.png" />
                    </div>
                    <div className={cx('col-9')}>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;