import classNames from "classnames/bind";
import { FaBars } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'

import style from './Navbar.module.scss';

const cx = classNames.bind(style);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('categories')}>
                    <FaBars />
                    <span className={cx('category-text')}>Danh mục sản phẩm</span>
                </div>
                <ul className={cx('nav-list')}>
                    <li className={cx('nav-item')}>Trang Chủ</li>
                    <li className={cx('nav-item')}>Giới thiệu</li>
                    <li className={cx('nav-item')}>
                        Sản phẩm <BsFillCaretDownFill className={cx('icon-arrow-down')} />
                    </li>
                    <li className={cx('nav-item')}>Tin tức</li>
                    <li className={cx('nav-item')}>Tuyển dụng</li>
                    <li className={cx('nav-item')}>Liên hệ</li>
                </ul>
            </div >
        </div >
    )

}
export default Navbar;