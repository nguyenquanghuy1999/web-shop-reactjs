import Tippy from '@tippyjs/react/headless';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import allProduct from '../../../data/products';
import style from './Search.module.scss';
import { useDebounce } from '../../../hooks';

const cx = classNames.bind(style);

function Search() {

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);

    const debounceValue = useDebounce(inputValue.trim(), 500);

    // handle filter products 
    useEffect(() => {
        const result = allProduct.filter(item => {
            if (inputValue.length >= 2) {
                const inputValueLowerCase = item.name.toLowerCase().includes(debounceValue);
                const inputValueUpperCase = item.name.toUpperCase().includes(debounceValue);
                return inputValueLowerCase || inputValueUpperCase;
            }
        })
        setData(result);
    }, [debounceValue])

    return (
        <Tippy
            placement='bottom'
            interactive
            visible={data.length > 0 && showSearchResult}
            onClickOutside={() => setShowSearchResult(false)}
            render={(attrs) => (
                <div className={cx('search-result')}  {...attrs}>
                    <span className={cx('search-text')}>Kết quả tìm kiếm: {data.length} sản phẩm</span>
                    <div className={cx('search-list')}>
                        {data.map((item, index) => (
                            <Link to={`/${item.name}`} key={index} state={item} >
                                <div className={cx('search-item')} onClick={() => {
                                    setInputValue('');
                                    setShowSearchResult(false);
                                }}>
                                    <img className={cx('search-item-img')} src={item.img} />
                                    <div className={cx('search-item-infos')}>
                                        <span className={cx('search-item-name')}>{item.name}</span>
                                        <span className={cx('search-item-price')}>{item.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button className={cx('btn-view-all')}>Xem tất cả</button>
                </div>
            )}>
            <div className={cx('search')}>
                <input
                    value={inputValue}
                    placeholder='Tìm kiếm'
                    onChange={e => setInputValue(e.target.value)}
                    onFocus={() => setShowSearchResult(true)}
                />
                <span className={cx('search-icon')}><HiMagnifyingGlass /></span>
            </div>
        </Tippy>

    )
}
export default Search;