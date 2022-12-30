import classNames from "classnames/bind";
import { FaBars } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import style from './Navbar.module.scss';
import { listCategory } from "../../../data";

import config from '../../../config'

const cx = classNames.bind(style);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Tippy
                    interactive
                    placement="bottom"
                    offset={[0, 12]}
                    render={attrs => (
                        <ul className={cx('category-list')} tabIndex={-1} {...attrs}>
                            {listCategory.map((item, index) => (
                                <Link to={`/category/${item.name}`} key={index}>
                                    <li className={cx('category-item')} >
                                        <img className={cx('category-img')} src={item.image} />
                                        <span className={cx('category-name')}>{item.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    )}>
                    <div className={cx('categories')}>
                        <FaBars />
                        <span className={cx('category-text')}>Danh mục sản phẩm</span>
                    </div>
                </Tippy>
                <ul className={cx('nav-list')}>
                    <Link to={config.home}> <li className={cx('nav-item')}>Trang Chủ</li></Link>
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