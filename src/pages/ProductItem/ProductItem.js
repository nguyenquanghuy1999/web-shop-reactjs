import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import style from './ProductItem.module.scss';

const cx = classNames.bind(style);

function ProductItem() {

    const [count, setCount] = useState(1);
    const [isDescMore, setIsDescMore] = useState(false);
    const [isDescLess, setIsDescLess] = useState(true);

    const handleDescMore = () => {
        setIsDescMore(true);
        setIsDescLess(false);
    };

    const handleDescLess = () => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth'
        });
        setIsDescLess(true);
        setIsDescMore(false);
    };



    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content-left')}>
                    <img className={cx('img')} src='https://vmart.exdomain.net/image/cache/catalog/evo/iphone-11-128gb-green-600x600-6ed960c7-33c2-4c94-894a-ec5970a80cc4-500x500.jpg' />
                    <div className={cx('infos')}>
                        <span className={cx('name')}>iphone 11 128GB Chính hãng (VN/A)</span>
                        <span className={cx('status')}> Tình trạng: <span>Còn hàng</span></span>
                        <span className={cx('price')}>20.990.000₫</span>
                        <div className={cx('quantity')}>
                            <button className={cx('decrease')} onClick={() => count > 1 && setCount(count - 1)}>–</button>
                            <span className={cx('number')}>{count}</span>
                            <button className={cx('increase')} onClick={() => setCount(count + 1)}>+</button>
                        </div>

                        <div className={cx('actions')}>
                            <button className={cx('add-to-cart')}>THÊM VÀO GIỎ</button>
                            <button className={cx('buy')}>MUA NGAY</button>
                        </div>
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('policy')}>
                        <div className={cx('policy-top')}>
                            <span className={cx('policy-top-text')}>YÊN TÂM MUA HÀNG</span>
                            <ul className={cx('policy-top-list')}>
                                <li className={cx('policy-top-item')}>Uy tín 20 năm xây dựng và phát triển</li>
                                <li className={cx('policy-top-item')}>Sản phẩm chính hãng 100%</li>
                                <li className={cx('policy-top-item')}>Trả góp lãi suất 0% toàn bộ giỏ hàng</li>
                                <li className={cx('policy-top-item')}>Trả bảo hành tận nơi sử dụng</li>
                                <li className={cx('policy-top-item')}>Bảo hành tận nơi cho doanh nghiệp</li>
                                <li className={cx('policy-top-item')}>Ưu đãi riêng cho học sinh sinh viên</li>
                                <li className={cx('policy-top-item')}>Vệ sinh miễn phí trọn đời PC, Laptop</li>
                            </ul>
                        </div>
                        <div className={cx('policy-bottom')}>
                            <span className={cx('policy-bottom-text')}>MIỄN PHÍ GIAO HÀNG</span>
                            <ul className={cx('policy-bottom-list')}>
                                <li className={cx('policy-bottom-item')}>Giao hàng siêu tốc trong 2h</li>
                                <li className={cx('policy-bottom-item')}>Giao hàng miễn phí toàn quốc</li>
                                <li className={cx('policy-bottom-item')}>Nhận hàng và thanh toán tại nhà (ship COD)</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div className={cx('description')}>
                <span className={cx('description-text')}>Mô tả</span>
                <div className={cx('description-inner')}>
                    <div className={cx('content', { 'isMore': isDescMore })}>
                        <p className={cx('content-header')}>
                            iPhone 11 với 6 phiên bản màu sắc, camera có khả năng chụp ảnh vượt trội, thời lượng pin cực dài và bộ vi xử lý mạnh nhất từ trước đến nay sẽ mang đến trải nghiệm tuyệt vời dành cho bạn.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-1.jpg' />
                        <h2 className={cx('content-title')}>Rực rỡ sắc màu, thể hiện cá tính</h2>
                        <p className={cx('content-paragrap')}>
                            Có tới 6 sự lựa chọn màu sắc cho iPhone 11 64GB, bao gồm Tím, Vàng, Xanh lục, Đen, Trắng và Đỏ, tha hồ để bạn lựa chọn màu phù hợp với sở thích, cá tính riêng của bản thân. Vẻ đẹp của iPhone 11 đến từ thiết kế cao cấp khi được làm từ khung nhôm nguyên khối và mặt lưng liền lạc với một tấm kính duy nhất. Ở mặt trước, bạn sẽ được chiêm ngưỡng màn hình Liquid Retina lớn 6,1 inch, màu sắc vô cùng chân thực. Tất cả tạo nên chiếc điện thoại tràn đầy hứng khởi.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-2.jpg' />
                        <h2 className={cx('content-title')}>Hệ thống camera kép mới</h2>
                        <p className={cx('content-paragrap')}>
                            Apple iPhone 11 sở hữu cụm camera kép mặt sau, bao gồm camera góc rộng và camera góc siêu rộng. Cảm biến camera góc rộng 12MP có khả năng lấy nét tự động nhanh gấp 3 lần trong điều kiện thiếu sáng. Bên cạnh đó cảm biến góc siêu rộng cho khả năng chụp cảnh rộng gấp 4 lần, là phương tiện ghi hình tuyệt vời cho những chuyến du lịch, chụp hình nhóm. Nhanh chóng chụp ảnh, quay video, chỉnh sửa và chia sẻ ngay trên iPhone, bạn sẽ không bỏ lỡ bất cứ khoảnh khắc đáng nhớ nào.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-3.jpg' />
                        <h2 className={cx('content-title')}>Quay video chưa bao giờ chuyên nghiệp đến thế</h2>
                        <p className={cx('content-paragrap')}>
                            Điện thoại iPhone 11 64GB có khả năng quay những đoạn video tuyệt đẹp với độ phân giải 4K 60fps siêu sắc nét. Camera góc siêu rộng mang đến nhiều khung cảnh hơn, đồng thời khả năng quay chuyển động cực ấn tượng sẽ tạo nên những thước phim hoàn hảo. Ngoài ra bạn còn có thể tập trung thu âm vào một chủ thể khi quay video bằng cách phóng to, zoom hình ảnh – đồng thời zoom âm thanh hết sức thú vị. Tất nhiên sau khi quay video, việc chỉnh sửa và xuất bản sẽ diễn ra hết sức tiện lợi, nhanh chóng trên iPhone 11.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-4.jpg' />

                        <h2 className={cx('content-title')}>Night Mode, chuyên gia chụp ảnh thiếu sáng</h2>
                        <p className={cx('content-paragrap')}>
                            Chụp ảnh thiếu sáng không còn là vấn đề trên iPhone 11. Với chế độ chụp đêm chuyên dụng Night Mode hoàn toàn mới, máy ảnh sẽ nhìn thấy rõ ràng từng chi tiết trong đêm tối. Không cần phải bật đèn flash, hình ảnh vẫn trở nên sống động nhờ ánh sáng tự nhiên, màu sắc chính xác và chất ảnh sáng rõ.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-5.jpg' />

                        <h2 className={cx('content-title')}>Hiệu ứng xóa phông “ảo diệu”</h2>
                        <p className={cx('content-paragrap')}>
                            Những bức ảnh chân dung xóa phông của bạn sẽ trở nên “ảo diệu” hơn trên iPhone 11. Với cơ chế xóa phông và ánh sáng mới, giờ đây bạn có thể chụp ảnh xóa phông cùng người bạn thân; thêm hiệu ứng ánh sáng Studio; thay đổi độ mờ phông nền. Các bức ảnh xóa phông sẽ có độ làm mờ tuyệt hảo, phân tách chủ thể chính xác và ánh sáng đẹp mắt.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-6.jpg' />

                        <h2 className={cx('content-title')}>Smart HDR thế hệ mới, chụp ảnh tốt hơn trong điều kiện ánh sáng phức tạp</h2>
                        <p className={cx('content-paragrap')}>
                            Nhờ trí tuệ nhân tạo Machine Learning, tính năng Smart HDR trên camera iPhone 11 thông minh hơn bao giờ hết. Camera sẽ tự động nhận diện người và cảnh, sau đó đưa ra các tinh chỉnh riêng biệt. Trong cùng một bức ảnh, khuôn mặt sẽ có điểm nhấn đẹp hơn, tông màu da tự nhiên – trong khi đó phần khung cảnh nền hoàng hôn vẫn tuyệt đẹp theo một cách khác. Smart HDR sẽ giúp điện thoại xử lý bức ảnh xuất sắc, đặc biệt là trong điều kiện ánh sáng phức tạp.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-7.jpg' />


                        <h2 className={cx('content-title')}>Camera trước 12MP, hơn cả chụp ảnh selfie</h2>
                        <p className={cx('content-paragrap')}>
                            Camera trước của iPhone 11 đã được nâng cấp lên 12MP, mang đến những bức ảnh selfie sắc nét và chất lượng cao hơn. Apple còn bổ sung thêm tính năng mới mang tên slofie – quay một đoạn video chuyển động siêu chậm 120 fps bằng chính camera trước. Lưu giữ những khoảnh khắc thú vị theo cách của riêng bạn.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-8.jpg' />

                        <h2 className={cx('content-title')}>Chiếc iPhone bền bỉ và thân thiện</h2>
                        <p className={cx('content-paragrap')}>
                            Không chỉ có vẻ ngoài hấp dẫn, iPhone 11 còn rất vững chắc khi sử dụng kính cường lực cứng nhất trong thế giới smartphone. Nước cũng không phải là vấn đề với khả năng chống nước chuẩn IP68, cho phép bạn ngâm thiết bị dưới 2m trong vòng 30 phút, điện thoại vẫn hoàn toàn sống khỏe dưới nước. Tuyệt vời hơn nữa, tất cả vật liệu chế tạo nên iPhone 11 đều có khả năng tái chế, cực kỳ thân thiện với môi trường.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-9.jpg' />


                        <h2 className={cx('content-title')}>Màn hình Liquid Retina sống động đến từng chi tiết</h2>
                        <p className={cx('content-paragrap')}>
                            Màn hình 6,1 inch Liquid Retina trên điện thoại iPhone 11 mang cả thế giới đến trước mắt bạn khi mọi thứ đều chân thực một cách tuyệt vời. Cân bằng trắng được điều chỉnh dựa theo ánh sáng xung quanh, để nhiệt độ màu luôn luôn dễ chịu. Với cảm ứng xúc giác Haptic Touch hoàn toàn mới, bạn có thể thao tác nhanh chóng trên màn hình cảm ứng.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-10.jpg' />


                        <h2 className={cx('content-title')}>Thoải mái sử dụng cả ngày</h2>
                        <p className={cx('content-paragrap')}>
                            Thời lượng pin của iPhone 11 64GB trên cả mong đợi, cho phép bạn sử dụng thoải mái trong cả ngày dài. Đây là kết quả của sự tương thích tuyệt đối giữa phần cứng và phần mềm. Hơn nữa, với tính năng sạc nhanh, chỉ cần 30 phút cho 50% pin, nhanh chóng nạp đầy năng lượng.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-12.jpg' />

                        <h2 className={cx('content-title')}>Sức mạnh đẳng cấp khác biệt</h2>
                        <p className={cx('content-paragrap')}>
                            Cả iPhone 11 và iPhone 11 Pro đều được trang bị bộ vi xử lý mạnh nhất thế giới smartphone hiện tại. Apple A13 Bionic mang đến hiệu năng đẳng cấp khác biệt, mọi thứ đều diễn ra nhanh chóng, mượt mà một cách hoàn hảo. Kể cả những tựa game nặng nhất, có đồ họa chân thực đến khó tin vẫn được thể hiện cực đỉnh trên iPhone 11. Sử dụng iPhone 11 64GB nghĩa là bạn sẽ có chiếc máy hiệu năng đảm bảo dùng tốt trong nhiều năm nữa.
                        </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-11.jpg' />

                        <h2 className={cx('content-title')}>Nhận diện khuôn mặt nhanh hơn bao giờ hết</h2>
                        <p className={cx('content-paragrap')}>
                            Face ID mới được cải tiến cho phép bạn mở khóa iPhone 11 64GB nhanh chóng và dễ dàng hơn bao giờ hết. Thậm chí Face ID còn tiện lợi và bảo mật hơn cả phương án truyền thống là cảm biến vân tay Touch ID. Bạn có thể dùng tính năng này để đăng nhập vào ứng dụng, tài khoản, ngân hàng và thanh toán với Apple Pay. Tất cả thông tin đều được bảo mật tuyệt đối khi Face ID không hề lưu trữ hay chia sẻ hình ảnh của bạn. Kể cả khi gửi ảnh hay gọi FaceTime, hình ảnh của bạn cũng được mã hóa an toàn.                    </p>
                        <img className={cx('content-img')} src='https://vmart.exdomain.net/image/catalog/evo/iphone-11-13.jpg' />



                    </div>
                    {isDescLess && <button className={cx('desc-more')} onClick={handleDescMore}>Xem Thêm</button>}
                    {isDescMore && <button className={cx('desc-less')} onClick={handleDescLess}>Ẩn bớt</button>}
                </div>
            </div>
        </div >
    )
}

export default ProductItem;