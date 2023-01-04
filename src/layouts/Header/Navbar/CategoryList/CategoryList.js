import classNames from "classnames/bind";
import style from './CategoryList.module.scss';
import { Link } from "react-router-dom";

import { category } from '../../../../data/category'

const cx = classNames.bind(style);

function CategoryList() {
    return (
        <ul className={cx('category-list')}>
            {category.map((item, index) => (
                <Link to={`/category/${item.category}`} key={index} state={item.name}>
                    <li className={cx('category-item')} >
                        <img className={cx('category-img')} src={item.image} />
                        <span className={cx('category-name')}>{item.name}</span>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
export default CategoryList;