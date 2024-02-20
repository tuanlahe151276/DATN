import { useState } from "react";
import { LuBuilding, LuDelete } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlCrop } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import { RadioButton, SelectItem } from "../../../components";
import Slider from "@mui/material/Slider";
import {
  listAcreage,
  listCity,
  listDistrict,
  listPrice,
  listType,
  listWard,
  marksAcreage,
  marksPrice,
} from "../../../utils/data";
export default function MainSearch() {
  // show
  const [showType, setShowType] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [showDistrict, setShowDistrict] = useState(false);
  const [showWards, setShowWards] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showAcreage, setShowAcreage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // gia tri type
  const [type, setType] = useState("Phòng trọ, nhà trọ");

  // gia tri address
  const [city, setCity] = useState("Toàn quốc");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  // gia
  const [valuePrice, setValuePrice] = useState([0, 100]);
  const [labelPrice, setLabelPrice] = useState(null);
  // dien tich
  const [valueAcreage, setValueAcreage] = useState([0, 100]);
  const [labelAcreage, setLabelAcreage] = useState(null);

  // Close Modal
  const handleClose = () => {
    setShowCity(false);
    setShowDistrict(false);
    setShowWards(false);
    setShowModal(false);
  };
  const handleCloseModal = (e) => {
    e.stopPropagation();
    handleClose();
    setShowType(false);
    setShowPrice(false);
    setShowAcreage(false);
  };
  // Chon Address
  const handleChooseCity = () => {
    setShowCity(false);
    setShowDistrict(true);
  };
  const handleChooseDistrict = () => {
    setShowCity(false);
    setShowDistrict(false);
    setShowWards(true);
  };
  const handleChooseWards = () => {
    handleClose();
  };

  return (
    <div className="h-[60px] mb-[10px]">
      <section className="h-full">
        <section className="bg-[#febb02] p-[10px] mb-5 h-full rounded-lg">
          <div className="flex items-center text-sm text-[#777]">
            <div
              className="bg-white border border-white rounded-[5px] inline-flex items-center w-full h-[35px] my-0 mx-[3px] p-0 relative cursor-pointer basis-1/5 max-w-[20%]"
              onClick={() => {
                setShowType(true);
                setShowModal(true);
              }}>
              <LuBuilding className=" mx-1" />
              <span
                className={`${type && "text-black font-bold overflow-hidden max-w-[210px] text-ellipsis"} whitespace-nowrap block w-full`}>
                {type ? type : "Phòng trọ, nhà trọ"}
              </span>
              <LuDelete
                className="ml-auto mr-2 text-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setType("Phòng trọ, nhà trọ");
                }}
              />
            </div>
            <div
              className="bg-white border border-white rounded-[5px] inline-flex items-center w-full h-[35px] my-0 mx-[3px] p-0 relative cursor-pointer basis-1/5 max-w-[20%]"
              onClick={() => {
                setShowCity(true);
                setShowModal(true);
              }}>
              <GrLocation className="mx-1" />
              <span
                className={`${address && "text-black font-bold overflow-hidden max-w-[210px] text-ellipsis"} whitespace-nowrap block w-full`}>
                {address ? address : "Toàn quốc"}
              </span>
              {!address ? (
                <MdOutlineKeyboardArrowRight className="ml-auto text-2xl" />
              ) : (
                <LuDelete
                  className="ml-auto mr-2 text-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAddress("");
                  }}
                />
              )}
            </div>
            <div
              className="bg-white border border-white rounded-[5px] inline-flex items-center w-full h-[35px] my-0 mx-[3px] p-0 relative cursor-pointer basis-1/5 max-w-[20%]"
              onClick={() => {
                setShowPrice(true);
                setShowModal(true);
              }}>
              <IoPricetagOutline className="mx-1" />
              <span
                className={`${labelPrice && "text-black font-bold overflow-hidden max-w-[210px] text-ellipsis"} whitespace-nowrap block w-full`}>
                {labelPrice ? labelPrice : "Chọn giá"}
              </span>
              {!labelPrice ? (
                <MdOutlineKeyboardArrowRight className="ml-auto text-2xl" />
              ) : (
                <LuDelete
                  className="ml-auto mr-2 text-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLabelPrice(null);
                    setValuePrice([0, 100]);
                  }}
                />
              )}
            </div>
            <div
              className="bg-white border border-white rounded-[5px] inline-flex items-center w-full h-[35px] my-0 mx-[3px] p-0 relative cursor-pointer basis-1/5 max-w-[20%]"
              onClick={() => {
                setShowAcreage(true);
                setShowModal(true);
              }}>
              <SlCrop className="mx-1" />
              <span
                className={`${labelAcreage && "text-black font-bold overflow-hidden max-w-[210px] text-ellipsis"} whitespace-nowrap block w-full`}>
                {labelAcreage ? labelAcreage : "Chọn diện tích"}
              </span>
              {!labelAcreage ? (
                <MdOutlineKeyboardArrowRight className="ml-auto text-2xl" />
              ) : (
                <LuDelete
                  className="ml-auto mr-2 text-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLabelAcreage(null);
                    setValueAcreage([0, 100]);
                  }}
                />
              )}
            </div>
            <div className="bg-[#0071c2] border border-[#0071c2] rounded-[5px] inline-flex items-center w-full h-[35px] my-0 mx-[3px] p-0 relative cursor-pointer basis-1/5 max-w-[20%] text-white font-bold justify-center">
              <CiSearch className="mr-1 text-lg" />
              <span>Tìm kiếm</span>
            </div>
          </div>
          {/*Type  */}

          <div
            className={`${!showType ? "hidden" : "block"} fixed top-[60px] left-0 right-0 bottom-0 z-[999] bg-white overflow-hidden w-[700px] max-h-[500px] my-0 mx-auto rounded-lg`}>
            <div className="h-[45px] uppercase font-bold relative flex items-center justify-center border border-[#ddd] px-10 text-sm">
              <span className="header-label">Chọn loại bất động sản</span>
              <FaArrowLeft
                className="text-2xl absolute left-2 cursor-pointer"
                onClick={() => {
                  setShowType(false);
                  setShowModal(false);
                }}
              />
            </div>
            <div className="w-full h-[calc(100%-40px)] overflow-x-hidden overflow-y-scroll py-[10px] px-[25px] ">
              <div
                className="w-full rounded-lg"
                onClick={() => {
                  setShowType(false);
                  setShowModal(false);
                }}>
                <RadioButton
                  name="type"
                  items={listType}
                  value={type}
                  onChange={setType}
                />
              </div>
            </div>
          </div>
          {/*City  */}

          <div
            className={`${!showCity ? "hidden" : "block"} fixed top-[60px] left-0 right-0 bottom-0 z-[999]  overflow-hidden w-[700px] max-h-[500px] my-0 mx-auto rounded-lg bg-white`}>
            <div className="h-[45px] uppercase font-bold relative flex items-center justify-center border border-[#ddd] px-10 text-sm">
              <FaArrowLeft
                className="text-2xl absolute left-2 cursor-pointer"
                onClick={() => {
                  setShowCity(false);
                  setShowModal(false);
                }}
              />
              <span className="">Chọn tỉnh thành</span>
            </div>
            <div className="w-full h-[calc(100%-40px)] overflow-x-hidden overflow-y-scroll py-[10px] px-[25px]">
              <div className="w-full rounded-lg" onClick={handleChooseCity}>
                <RadioButton
                  name="city"
                  items={listCity}
                  value={city}
                  onChange={setCity}
                />
              </div>
            </div>
          </div>
          {/*District  */}

          <div
            className={`${!showDistrict ? "hidden" : "block"} fixed top-[60px] left-0 right-0 bottom-0 z-[999] bg-white overflow-hidden w-[700px] max-h-[500px] my-0 mx-auto rounded-lg`}>
            <div className="h-[45px] uppercase font-bold relative flex items-center justify-center border border-[#ddd] px-10 text-sm">
              <span className="header-label">Chọn quận huyện</span>
              <FaArrowLeft
                className="text-2xl absolute left-2 cursor-pointer"
                onClick={() => {
                  setShowDistrict(false);
                  setShowCity(true);
                }}
              />
            </div>
            <div className="w-full h-[calc(100%-40px)] overflow-x-hidden overflow-y-scroll py-[10px] px-[25px]">
              <div className="w-full rounded-lg" onClick={handleChooseDistrict}>
                <RadioButton
                  name="district"
                  items={listDistrict}
                  value={district}
                  onChange={setDistrict}
                />
              </div>
            </div>
          </div>
          {/*Wards  */}
          <div
            className={`${!showWards ? "hidden" : "block"} fixed top-[60px] left-0 right-0 bottom-0 z-[999] bg-white overflow-hidden w-[700px] max-h-[500px] my-0 mx-auto rounded-lg`}>
            <div className="h-[45px] uppercase font-bold relative flex items-center justify-center border border-[#ddd] px-10 text-sm">
              <span className="header-label">Chọn phường xã</span>
              <FaArrowLeft
                className="text-2xl absolute left-2 cursor-pointer"
                onClick={() => {
                  setShowWards(false);
                  setShowDistrict(true);
                }}
              />
            </div>
            <div className="w-full h-[calc(100%-40px)] overflow-x-hidden overflow-y-scroll py-[10px] px-[25px]">
              <div className="w-full rounded-lg" onClick={handleChooseWards}>
                <RadioButton
                  name="wards"
                  items={listWard}
                  value={ward}
                  onChange={setWard}
                />
              </div>
            </div>
          </div>
          {/*Price  */}

          <div
            className={`${!showPrice ? "hidden" : "block"} fixed top-[60px] left-0 right-0 bottom-0 z-[999] bg-white overflow-hidden w-[700px] max-h-[500px] my-0 mx-auto rounded-lg`}>
            <div className="h-[45px] uppercase font-bold relative flex items-center justify-center border border-[#ddd] px-10 text-sm">
              <span className="header-label">Chọn giá</span>
              <FaArrowLeft
                className="text-2xl absolute left-2 cursor-pointer"
                onClick={() => {
                  setShowPrice(false);
                  setShowModal(false);
                }}
              />
            </div>
            <div className="w-full h-[calc(100%-40px-50px)] overflow-y-scroll overflow-x-hidden px-[25px] py-[10px]">
              <div className="w-full flex flex-col">
                <p className="block w-full text-center my-4">
                  {/*  */}
                  <input
                    type="text"
                    value={labelPrice ? labelPrice : "Từ 0 - 20 triệu+"}
                    readOnly="readonly"
                    className="px-[2px] py-[1px] w-full text-center border-none text-lg font-bold text-[#ff6600]"
                  />
                </p>
                <div className="p-[10px] mb-[30px]">
                  {/* Slider Price*/}
                  <Slider
                    value={valuePrice}
                    onChange={(e) => setValuePrice(e.target.value)}
                    valueLabelDisplay="auto"
                    marks={marksPrice}
                  />
                </div>
                <p className="my-[14px] font-semibold">Chọn nhanh</p>
                <ul className="block w-full text-sm">
                  {listPrice?.map((item, index) => (
                    <SelectItem
                      text={item?.text}
                      key={index}
                      selected={item?.value === valuePrice}
                      onClick={() => {
                        setValuePrice(item?.value);
                        setLabelPrice(item?.label);
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full h-[50px] flex items-center justify-center">
              <div
                className="w-full h-full bg-[#ffa500] flex items-center justify-center font-bold uppercase cursor-pointer text-black text-sm"
                onClick={(e) => handleCloseModal(e)}>
                Áp dụng
              </div>
            </div>
          </div>
          <div
            className={`${!showAcreage ? "hidden" : "block"} fixed top-[60px] left-0 right-0 bottom-0 z-[999] bg-white overflow-hidden w-[700px] max-h-[500px] my-0 mx-auto rounded-lg`}>
            <div className="h-[45px] uppercase font-bold relative flex items-center justify-center border border-[#ddd] px-10 text-sm">
              <span className="header-label">Chọn diện tích</span>
              <FaArrowLeft
                className="text-2xl absolute left-2 cursor-pointer"
                onClick={() => {
                  setShowAcreage(false);
                  setShowModal(false);
                }}
              />
            </div>
            <div className="w-full h-[calc(100%-40px-50px)] overflow-y-scroll overflow-x-hidden px-[25px] py-[10px]">
              <div className="w-full flex flex-col">
                <p className="block w-full text-center my-4">
                  {/*  */}
                  <input
                    type="text"
                    value={labelAcreage ? labelAcreage : " "}
                    readOnly="readonly"
                    className="px-[2px] py-[1px] w-full text-center border-none text-lg font-bold text-[#ff6600]"
                  />
                </p>
                <div className="p-[10px] mb-[30px]">
                  {/* Slider Price*/}
                  <Slider
                    value={valueAcreage}
                    onChange={(e) => setValueAcreage(e.target.value)}
                    valueLabelDisplay="auto"
                    marks={marksAcreage}
                  />
                </div>
                <p className="my-[14px] font-semibold">Chọn nhanh</p>
                <ul className="block w-full text-sm">
                  {listAcreage?.map((item, index) => (
                    <SelectItem
                      text={item?.text}
                      key={index}
                      selected={item?.value === valueAcreage}
                      onClick={() => {
                        setValueAcreage(item?.value);
                        setLabelAcreage(item?.label);
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full h-[50px] flex items-center justify-center">
              <div
                className="w-full h-full bg-[#ffa500] flex items-center justify-center font-bold uppercase cursor-pointer text-black text-sm"
                onClick={(e) => handleCloseModal(e)}>
                Áp dụng
              </div>
            </div>
          </div>
        </section>
        <div
          className={`${!showModal ? "hidden" : "block"} fixed bg-black/50 top-0 left-0 right-0 bottom-0 z-[990]`}
          onClick={(e) => handleCloseModal(e)}></div>
      </section>
    </div>
  );
}
