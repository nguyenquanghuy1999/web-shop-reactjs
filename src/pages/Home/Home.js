import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from './Home.module.scss';
import { category } from "../../data/category";

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category')}>
                {category.map((item, index) => (
                    <Link key={index} to={`/category/${item.name}`}>
                        <div className={cx('category-item')}>
                            <img src={item.image} />
                            <span className={cx('category-title')}>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={cx('products')}>
            </div>
        </div>
    )
}
export default Home;