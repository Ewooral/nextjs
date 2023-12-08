'use client'
import React, {useEffect} from "react";
import {carouselItems, roundedShape} from '@/app/lib/carouselItem'
import Image from 'next/image'

// const Carousel = ({ carouselItems, ...rest }) => {
const Carousel = () => {
    const [active, setActive] = React.useState(0);
    let scrollInterval = null;

    useEffect(() => {
        scrollInterval = setTimeout(() => {
            setActive((active + 1) % carouselItems.length);
        }, 5000);
        return () => clearTimeout(scrollInterval);
    });
    return (
        <>
            <div>
                <div className="flex flex-row justify-center items-center mb-[5rem]">
                    {carouselItems.map((item, key) => {
                        const activeClass = active === key ? ' visible' : '';
                        return (
                            <div key={key} className="flex flex-col justify-center items-center bg-gray">
                                <div
                                    className={`flex flex-col justify-center items-center carousel carousel-item ${activeClass}`}>
                                    <Image src={item.image} alt={'img'} width={350} height={350}/>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="absolute bottom-[23%] text-white md:p-[2rem]">
                <h1 className="text-[24px] leading-none my-3">Customizable Multipurpose Dashboard</h1>
                <p className="text-[11px] text-[#ffffff9c] leading-none">Everything you need in an easily customizable
                    dashboard</p>
            </div>
            <article id="caro" className="absolute bottom-[15%] flex items-center justify-center">
                {
                    roundedShape.map((item, key) => {
                        const activeRound = active === key ? ' bg-white' : 'bg-[#f4f3f354]';
                        return (
                            <span key={key} className={`${item.className} ${activeRound}`}></span>
                        )
                    })
                }
            </article>
        </>
    );
};

export default Carousel