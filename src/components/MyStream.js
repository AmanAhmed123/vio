import React, { useState } from 'react'
import myStream from "../Images/myStream.png"
import luxIcon from "../Images/luxIcon.png"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"

import Icons from "./Icons"
// import ButtonGroup from '@mui/material/ButtonGroup';
import { ReactComponent as Twitch } from "../Icons/twitch.svg"
import { ReactComponent as Facebook } from "../Icons/facebook-f.svg"
import { ReactComponent as Instagram } from "../Icons/instagram.svg"
import { ReactComponent as Twitter } from "../Icons/twitter.svg"
import { ReactComponent as Discord } from "../Icons/discord.svg"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { ReactComponent as Youtube } from "../Icons/youtube.svg"
import '../styles/myStream.css';
import 'react-awesome-slider/dist/styles.css';
import TimeLine from "./TimeLine"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getValue } from "../RTK/slices/value"
import { clear } from "../RTK/slices/value"
import { supports } from "../data/supports"
import catdark from "../Images/catdark.png"



export default function MyStream() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        initialSlide: 0,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const getValueFromRedux = useSelector((state) => state.streemValue);
    const names = ["Saturday", "Sunday", "Monday", "Tuesday"]
    // const [rr, setyy] = useState(false)
    // const play = (gg) => {
    //     console.log(gg);
    //     console.log(getValueFromRedux[0]);
    // }
    const btnsInfo = [<Twitch className="w-4 h-4 fill-secondColor" />, <Facebook className="w-4 h-4 fill-secondColor" />, <Discord className="w-4 h-4 fill-secondColor" />]

    return (
        <div style={{ backgroundImage: `url(${myStream})` }} className="bg-cover bg-center bg-fixed ">
            <div className="container py-10">
                <div className="w-fit ">
                    <a className="text-secondColor flex gap-2 text-xl" href="https://www.twitch.tv/Violetism?fbclid=IwAR2CHSP6VPAtW6LKdLXvrg_QG9M-c4EP5Xa3Y6qeWJh44x_3ZW4GahZp5MQ"><span><Twitch className="w-12 h-12 fill-secondColor" /></span>Follow me in twitch</a>
                </div>
                <div className="bg-[#a78bfaa6] ">
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 py-20">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col">
                                <TimeLine arr={names} />
                            </div>
                        </div>
                        <div>
                            Violetism
                    </div>
                    </div>
                    <h1 className="text-2xl lg:text-3xl text-white mt-20">Supports</h1>
                    <div className="grid grid-row grid-cols-4 gap-10  mt-10 py-10 p-3 sm:p-10">
                        <div className="flex justify-center items-center col-span-4  md:col-span-1 flex-row md:flex-col gap-4">
                            {
                                <SliderBtn btnsInfo={btnsInfo} />
                            }
                        </div>
                        <div className="relative overflow-hidden  h-[300px] col-span-4 md:col-span-3 ">
                            <div className={`bg-mainColor w-full h-full absolute p-5 px-10 duration-500 ${getValueFromRedux[0] == 0 ? '  left-0 ' : ' left-[-1000px]'} `}>
                                <Slider {...settings} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {supports.map((obj) => {
                                        if (obj.type == "twitch") {
                                            return (
                                                <div className=" relative rounded-xl bg-secondColor p-10">
                                                    <Twitch className="w-7 h-7 absolute top-[10%] left-[10%]" />
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 rounded-full border-mainColor p-1">
                                                            <img src={obj.img} className="roundend-full w-32 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 ">
                                                        <h1 className="text-white">{obj.nameOfSupport}</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Slider>

                            </div>
                            <div className={`bg-mainColor w-full h-full absolute p-5 px-10 duration-500 ${getValueFromRedux[0] == 1 ? '  right-0 ' : ' right-[-1000px]'} `}>
                                <Slider {...settings} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {supports.map((obj) => {
                                        if (obj.type == "facebook") {
                                            return (
                                                <div className="flex justify-center relative rounded-xl bg-secondColor items-center flex-col p-10">
                                                    <Facebook className="w-7 h-7 absolute top-[10%] left-[10%]" />
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 rounded-full border-mainColor p-1">
                                                            <img src={obj.img} className="roundend-full w-32 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <h1 className="text-white">ffffffff</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Slider>
                            </div>
                            <div className={`bg-mainColor w-full h-full absolute p-5 px-10 duration-500 ${getValueFromRedux[0] == 2 ? '  right-0 ' : ' right-[-1000px]'} `}>
                                <Slider {...settings} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {supports.map((obj) => {
                                        if (obj.type == "discord") {
                                            return (
                                                <div className="flex justify-center relative rounded-xl bg-secondColor items-center flex-col p-10">
                                                    <Discord className="w-7 h-7 absolute top-[10%] left-[10%]" />
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 rounded-full border-mainColor p-1">
                                                            <img src={obj.img} className="roundend-full w-32 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <h1 className="text-white">ffffffff</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const SliderBtn = ({ btnsInfo }) => {
    const [activeBtn, setActiveBtn] = useState(0)
    const dispatch = useDispatch()


    const change = (ind) => {
        setActiveBtn(ind)
        dispatch(clear())
        dispatch(getValue(ind))
    }
    return (
        <>
            {
                btnsInfo.map((btnInfo, ind) => (
                    <span onClick={() => { change(ind) }} key={ind} className={`p-3 rounded-3xl flex justify-center items-center bg-mainColor cursor-pointer relative z-10 ${activeBtn === ind ? 'butt' :''}`}>{btnInfo}</span>
                ))
            }
        </>
    )
}