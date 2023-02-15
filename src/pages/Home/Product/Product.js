import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import style from './Product.module.scss';

const cx = classNames.bind(style);

function Product({ data, title, bannerSrc, items = [] }) {

    const [imgLarge, setImgLarge] = useState(false);
    const imgRef = useRef();

    const [lessData, setLessData] = useState(data.slice(0, 4))


    // handle banner if large than 300 will change the column
    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current.width > 300) {
                setImgLarge(true);
                setLessData(prev => prev.slice(0, 3));
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div className='grid'>
            <div className={cx('heading')}>
                <h3 className={cx('title')}>{title}</h3>
                <ul className={cx('list')}>
                    {items.map((item, index) => <li key={index} className={cx('item')}>{item}</li>)}
                </ul>
            </div>
            <div className='row'>
                <div className={imgLarge ? 'col-5' : 'col-3'}>
                    <img ref={imgRef} className={cx('image')} src={bannerSrc} />
                </div>
                <div className={imgLarge ? 'col-7' : 'col-9'}>
                    <div className="row">
                        {lessData.map((item) => (
                            <div className={cx('col-3', { 'itemFullWidth': imgLarge })} key={item.id}>
                                <ProductItem data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;