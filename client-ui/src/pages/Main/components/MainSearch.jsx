export default function MainSearch() {
  return (
    <div>
      <div>
        <div>
          <section id="filter-top-inner">
            <section id="filter-top">
              <div classname="filter-body">
                <div classname="filter-item post-estate-type js-filter-show-popup-estate-type active">
                  <span>Phòng trọ, nhà trọ</span>{" "}
                  <span classname="delete-item"></span>
                </div>
                <div classname="filter-item location js-filter-show-popup-city">
                  <span>Toàn quốc</span>
                </div>
                <div classname="filter-item post-price js-filter-show-popup-price">
                  <span>Chọn giá</span>
                </div>
                <div classname="filter-item post-acreage js-filter-show-popup-acreage">
                  <span>Chọn diện tích</span>
                </div>
                <div classname="filter-item submit">
                  <span>Tìm kiếm</span>
                </div>
              </div>
              <div classname="filter-popup js-filter-popup js-filter-popup-city">
                <div classname="filter-popup-header">
                  <span classname="header-label">Chọn tỉnh thành</span>
                  <div classname="popup-close _js-filter-popup-close js-filter-popup-city-close">
                    Đóng
                  </div>
                </div>
                <div classname="filter-popup-content">
                  <div
                    id="filter-popup-city-option"
                    classname="filter-list-option">
                    <ul>
                      <li classname="selected">Toàn quốc</li>
                      <li classname>Hồ Chí Minh</li>
                      <li classname>Hà Nội</li>
                      <li classname>Đà Nẵng</li>
                      <li classname>Bình Dương</li>
                      <li classname>Đồng Nai</li>
                      <li classname>Bà Rịa - Vũng Tàu</li>
                      <li classname>Cần Thơ</li>
                      <li classname>Khánh Hòa</li>
                      <li classname>Hải Phòng</li>
                      <li classname>An Giang</li>
                      <li classname>Bắc Giang</li>
                      <li classname>Bắc Kạn</li>
                      <li classname>Bạc Liêu</li>
                      <li classname>Bắc Ninh</li>
                      <li classname>Bến Tre</li>
                      <li classname>Bình Phước</li>
                      <li classname>Bình Thuận</li>
                      <li classname>Bình Định</li>
                      <li classname>Cà Mau</li>
                      <li classname>Cao Bằng</li>
                      <li classname>Gia Lai</li>
                      <li classname>Hà Giang</li>
                      <li classname>Hà Nam</li>
                      <li classname>Hà Tĩnh</li>
                      <li classname>Hải Dương</li>
                      <li classname>Hậu Giang</li>
                      <li classname>Hòa Bình</li>
                      <li classname>Hưng Yên</li>
                      <li classname>Kiên Giang</li>
                      <li classname>Kon Tum</li>
                      <li classname>Lai Châu</li>
                      <li classname>Lâm Đồng</li>
                      <li classname>Lạng Sơn</li>
                      <li classname>Lào Cai</li>
                      <li classname>Long An</li>
                      <li classname>Nam Định</li>
                      <li classname>Nghệ An</li>
                      <li classname>Ninh Bình</li>
                      <li classname>Ninh Thuận</li>
                      <li classname>Phú Thọ</li>
                      <li classname>Phú Yên</li>
                      <li classname>Quảng Bình</li>
                      <li classname>Quảng Nam</li>
                      <li classname>Quảng Ngãi</li>
                      <li classname>Quảng Ninh</li>
                      <li classname>Quảng Trị</li>
                      <li classname>Sóc Trăng</li>
                      <li classname>Sơn La</li>
                      <li classname>Tây Ninh</li>
                      <li classname>Thái Bình</li>
                      <li classname>Thái Nguyên</li>
                      <li classname>Thanh Hóa</li>
                      <li classname>Thừa Thiên Huế</li>
                      <li classname>Tiền Giang</li>
                      <li classname>Trà Vinh</li>
                      <li classname>Tuyên Quang</li>
                      <li classname>Vĩnh Long</li>
                      <li classname>Vĩnh Phúc</li>
                      <li classname>Yên Bái</li>
                      <li classname>Đắk Lắk</li>
                      <li classname>Đắk Nông</li>
                      <li classname>Điện Biên</li>
                      <li classname>Đồng Tháp</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div classname="filter-popup js-filter-popup js-filter-popup-district">
                <div classname="filter-popup-header">
                  <span classname="header-label">Chọn quận huyện</span>
                  <div classname="popup-close _js-filter-popup-close js-filter-popup-district-close">
                    Đóng
                  </div>
                </div>
                <div classname="filter-popup-content">
                  <div
                    id="filter-popup-district-option"
                    classname="filter-list-option">
                    <ul>
                      <li classname="selected">Tất cả</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div classname="filter-popup js-filter-popup js-filter-popup-ward">
                <div classname="filter-popup-header">
                  <span classname="header-label">Chọn phường xã</span>
                  <div classname="popup-close _js-filter-popup-close js-filter-popup-district-close">
                    Đóng
                  </div>
                </div>
                <div classname="filter-popup-content">
                  <div
                    id="filter-popup-district-option"
                    classname="filter-list-option">
                    <ul>
                      <li classname="selected">Tất cả</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div classname="filter-popup js-filter-popup js-filter-popup-estate-type">
                <div classname="filter-popup-header">
                  <span classname="header-label">Chọn loại bất động sản</span>
                  <div classname="popup-close js-filter-popup-close">Đóng</div>
                </div>
                <div classname="filter-popup-content">
                  <div
                    id="filter-popup-estate-type-option"
                    classname="filter-list-option">
                    <ul>
                      <li classname="selected">Phòng trọ, nhà trọ</li>
                      <li classname>Nhà thuê nguyên căn</li>
                      <li classname>Cho thuê căn hộ</li>
                      <li classname>Cho thuê căn hộ mini</li>
                      <li classname>Cho thuê căn hộ dịch vụ</li>
                      <li classname>Tìm người ở ghép</li>
                      <li classname>Cho thuê mặt bằng, văn phòng</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div classname="filter-popup has-footer js-filter-popup js-filter-popup-price">
                <div classname="filter-popup-header">
                  <span classname="header-label">Chọn giá</span>
                  <div classname="popup-close js-filter-popup-close">Đóng</div>
                </div>
                <div classname="filter-popup-content">
                  <div classname="bds-ranger">
                    <p>
                      <input
                        type="text"
                        readOnly="readonly"
                        classname="js-amount-price"
                      />
                    </p>
                    <div>
                      <div classname="vue-slider vue-slider-ltr">
                        <div classname="vue-slider-rail">
                          <div classname="vue-slider-process">
                            <div classname="vue-slider-marks">
                              <div classname="vue-slider-mark vue-slider-mark-active">
                                <div classname="vue-slider-mark-step vue-slider-mark-step-active">
                                  <div classname="vue-slider-mark-label vue-slider-mark-label-active">
                                    0
                                  </div>
                                </div>
                                <div classname="vue-slider-mark vue-slider-mark-active">
                                  <div classname="vue-slider-mark-step vue-slider-mark-step-active">
                                    <div classname="vue-slider-mark-label vue-slider-mark-label-active">
                                      15 triệu+
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div classname="vue-slider-dot-handle">
                                    <div classname="vue-slider-dot-tooltip vue-slider-dot-tooltip-top">
                                      <div classname="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top">
                                        <span classname="vue-slider-dot-tooltip-text">
                                          0 đ
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div classname="vue-slider-dot-handle">
                                    <div classname="vue-slider-dot-tooltip vue-slider-dot-tooltip-top">
                                      <div classname="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top">
                                        <span classname="vue-slider-dot-tooltip-text">
                                          15.000.000 đ
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p>Chọn nhanh</p>
                            <ul classname="custom-list-ranger">
                              <li classname>Dưới 1 triệu đồng</li>
                              <li classname>Từ 1 - 2 triệu đồng</li>
                              <li classname>Từ 2 - 3 triệu đồng</li>
                              <li classname>Từ 3 - 5 triệu đồng</li>
                              <li classname>Từ 5 - 7 triệu đồng</li>
                              <li classname>Từ 7 - 10 triệu đồng</li>
                              <li classname>Từ 10 - 15 triệu đồng</li>
                              <li classname>Trên 15 triệu đồng</li>
                            </ul>
                          </div>
                        </div>
                        <div classname="filter-popup-footer">
                          <div classname="filter-btn-bottom">Áp dụng</div>
                        </div>
                      </div>
                      <div classname="filter-popup has-footer js-filter-popup js-filter-popup-acreage">
                        <div classname="filter-popup-header">
                          <span classname="header-label">Chọn diện tích</span>
                          <div classname="popup-close js-filter-popup-close">
                            Đóng
                          </div>
                        </div>

                        <ul classname="custom-list-ranger">
                          <li classname>
                            Dưới 20m<sup>2</sup>
                          </li>
                          <li classname>
                            Từ 20m<sup>2</sup> - 30m<sup>2</sup>
                          </li>
                          <li classname>
                            Từ 30m<sup>2</sup> - 50m<sup>2</sup>
                          </li>
                          <li classname>
                            Từ 50m<sup>2</sup> - 70m<sup>2</sup>
                          </li>
                          <li classname>
                            Từ 70m<sup>2</sup> - 90m<sup>2</sup>
                          </li>
                          <li classname>
                            Trên 90m<sup>2</sup>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div classname="filter-popup-footer">
                      <div classname="filter-btn-bottom">Áp dụng</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div classname="black_overlay js-black-overlay"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
