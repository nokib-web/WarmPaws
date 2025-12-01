import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaPaw } from "react-icons/fa";
import hero1 from '../../assets/hero1.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'

const HeroSlider = () => {
    const slides = [
        {
            
            img: hero1,
            text: "Keep your pets warm this winter ",
            btn: "Explore Care Tips",
        },
        {
            img: hero2 ,
            text: "Stylish comfort for every paw ",
            btn: "Shop Winter Gear",
        },
        {
            img: hero3 ,
            text: "Because warmth means love ",
            btn: "Get Started",
        },
    ];

    return (
        <section className=" w-11/12 md:w-6/7 lg:w-3/4 mx-auto rounded-xl h-[30vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-white transition-all duration-700"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                         
                            <div className=" p-8 rounded-2xl  text-center ">
                                <h2 className="text-3xl md:text-5xl font-bold  ">
                                    {slide.text}
                                </h2>
                                <button className="btn bg-linear-to-r from-[#E67E22] to-[#5A3D1E] text-white border-none hover:opacity-90 transition-all">
                                    {slide.btn} <FaPaw className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

           
        </section>
    );
};

export default HeroSlider;
