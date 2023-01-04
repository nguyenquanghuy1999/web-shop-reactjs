import Tippy from '@tippyjs/react/headless';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Search.module.scss';

const cx = classNames.bind(style);

function Search() {
    const [isInputFocus, setIsInputFocus] = useState(false);

    return (
        <Tippy
            placement='bottom'
            interactive
            visible={isInputFocus}
            onClickOutside={() => setIsInputFocus(false)}
            render={(attrs) => (
                <div className={cx('search-result')}  {...attrs}>
                    <span className={cx('search-text')}>Kết quả tìm kiếm</span>
                    <div className={cx('search-list')}>
                        <Link to={`/${'iPhon1e11128GB(VNA)'}`}>
                            <div className={cx('search-item')}>
                                <img
                                    className={cx('search-item-img')}
                                    src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-11-128gb-green-600x600-6ed960c7-33c2-4c94-894a-ec5970a80cc4-228x228.jpg"
                                />
                                <div className={cx('search-item-infos')}>
                                    <span className={cx('search-item-name')}> iPhone 11 128GB Chính hãng (VN/A) </span>
                                    <span className={cx('search-item-price')}>20.990.000đ</span>
                                </div>
                            </div>
                        </Link>
                        <div className={cx('search-item')}>
                            <img
                                className={cx('search-item-img')}
                                src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-11-128gb-green-600x600-6ed960c7-33c2-4c94-894a-ec5970a80cc4-228x228.jpg"
                            />
                            <div className={cx('search-item-infos')}>
                                <span className={cx('search-item-name')}>
                                    iPhone 11 128GB Chính hãng (VN/A)</span>
                                <span className={cx('search-item-price')}>20.990.000đ</span>
                            </div>
                        </div>
                        <div className={cx('search-item')}>
                            <img
                                className={cx('search-item-img')}
                                src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-11-128gb-green-600x600-6ed960c7-33c2-4c94-894a-ec5970a80cc4-228x228.jpg"
                            />
                            <div className={cx('search-item-infos')}>
                                <span className={cx('search-item-name')}>
                                    iPhone 11 128GB Chính hãng (VN/A)</span>
                                <span className={cx('search-item-price')}>20.990.000đ</span>
                            </div>
                        </div>
                    </div>
                    <button className={cx('btn-view-all')}>Xem tất cả</button>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input placeholder='Tìm kiếm' onFocus={() => setIsInputFocus(true)} />
                <span className={cx('search-icon')}><HiMagnifyingGlass /></span>
            </div>
        </Tippy>

    )
}
export default Search;