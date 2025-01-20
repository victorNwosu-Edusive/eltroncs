import { useState, useEffect } from "react";
import { Heart, MoveRight, ShoppingBag } from "lucide-react";
import HeroImageOne from '../assets/images/hero-section-one.png';
import HeroPercent from '../assets/images/hero-percent.png';
import HeroAccess from '../assets/images/hero-access.png';
import HeroHome from '../assets/images/hero-home.png';
import PhoneTablet from '../assets/images/phone-tablet.png';
import Laptop from '../assets/images/laptop.png';
import Gaming from '../assets/images/gaming-access.png';
import Wearable from '../assets/images/watch.png';
import BestOne from '../assets/images/best-one.webp';

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgColor: "bg-purple-100",
      subText: "LATEST TECH GADGETS",
      title: "Step Into the Future of Tech!",
      description: "Find the newest phones, laptops, and gadgets from top brands.",
      image: HeroImageOne,
      tags: ["Phones", "Laptops", "Monitors"],
      tagColor: "bg-purple-200 border-[2px] border-purple-400 rounded-full text-purple-400",
      buttonText: "Shop now",
      buttonColor: "bg-purple-800",
      buttonHover: "bg-purple-950",
    },
    {
      bgColor: "bg-orange-100/75",
      subText: "BIG DISCOUNTS",
      title: "Unbeatable Deals on Electronics",
      description: "Save up to 50% on select items. Limited-time offers!",
      image: HeroPercent,
      tags: [],
      buttonText: "View deals",
      buttonColor: "bg-orange-800",
      buttonHover: "bg-orange-950",
    },
    {
      bgColor: "bg-teal-100",
      subText: "PREMIUM ACCESSORIES",
      title: "Complete your Tech Setup!",
      description: "High-quality accessories for all your devices, all in one place",
      image: HeroAccess,
      tags: ["Chargers", "Cases", "Tripods"],
      tagColor: "bg-teal-200 border-[2px] border-teal-400 rounded-full text-teal-400",
      buttonText: "Shop Accessories",
      buttonColor: "bg-teal-800",
      buttonHover: "bg-teal-950",
    },
    {
        bgColor: "bg-blue-100",
        subText: "SMART HOME ESSENTIALS",
        title: "Ugrade to a Smarter Home!",
        description: "Discover Smart TVs Home Security systems, and more",
        image: HeroHome,
        tags: ["Televisions", "Speakers", "ACs"],
        tagColor: "bg-blue-200 border-[2px] border-blue-400 rounded-full text-blue-400",
        buttonText: "Shop Now",
        buttonColor: "bg-blue-800",
        buttonHover: "bg-blue-950",
      },
  ];

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main className="pt-24 bg-white">
      <header className="relative overflow-hidden">
        {/* Slides Container */}
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-auto ${slide.bgColor} p-10 md:p-20 lg:p-20 pt-14 pb-16 md:pb-0 lg:pb-0 grid gap-3 grid-cols-2`}
            >
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-[10px] md:text-[12px] lg:text-[12px] font-bold mb-1 tracking-wider">{slide.subText}</h1>
                <h1 className="text-2xl md:text-4xl lg:text-4xl font-[Syne] font-extrabold mb-4">{slide.title}</h1>
                <p className="text-[12px] md:text-[16px] lg:text-[16px] mb-3">{slide.description}</p>
                <div className="flex gap-1 md:gap-3 lg:gap-3 mb-7">
                  {slide.tags.map((tag, i) => (
                    <h1 key={i} className={`p-1 px-3 font-bold md:font-[500] lg:font-[500] ${slide.tagColor} text-[8px] md:text-[10px] lg:text-[10px]`}>{tag}</h1>
                  ))}
                </div>
                <button className={`flex justify-center items-center px-2 p-2 rounded-md ${slide.buttonColor} hover:bg-black duration-300 text-white gap-3 text-[10px] md:text-[14px] lg:text-[14px] `}>
                  {slide.buttonText} <MoveRight size={13} />
                </button>
              </div>
              <div>
                <img src={slide.image} alt="" className="mt-14" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-1 rounded-full cursor-pointer ${currentSlide === index ? "bg-slate-600" : "bg-slate-400"}`}
            />
          ))}
        </div>

        {/* Prev and Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 px-4 flex justify-center items-center rounded-full hover:bg-opacity-70 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 px-4  rounded-full hover:bg-opacity-70 transition"
        >
          ❯
        </button>
      </header>

          <section className="p-10 md:p-20 lg:p-20 pt-28 bg-white items-center text-center">
            <h1 className="text-[12px] md:text-sm lg:text-sm mb-7 text-slate-600">Explore a wide range of products tailored to your tech needs.</h1>
            <div className="grid grid-cols-2 gap-3 md:flex lg:flex md:flex-wrap lg:flex-wrap justify-center md:gap-4 lg:gap-4 *:h-auto *:md:w-64 lg:*:w-52 *:rounded-md *:p-4 *:bg-slate-100 mx-auto">
              <div className="flex-row justify-between hover:p-1 cursor-pointer duration-300"><img src={PhoneTablet} alt="" /> <p className=" p-1 bg-white rounded-full text-slate-400 text-[9px] md:text-[12px] lg:text-[12px]  mt-3">Phones & Tablets</p></div>
              <div className="flex-row justify-between hover:p-1 cursor-pointer duration-300"><img src={Laptop} alt="" /><p className=" p-1 bg-white rounded-full text-slate-400 text-[8px] md:text-[12px] lg:text-[12px] mt-6 md:mt-6 lg:mt-7">Laptops & Computers</p></div>
              <div className="flex-row justify-between hover:p-1 cursor-pointer duration-300"><img src={Gaming} alt="" /><p className=" p-1 bg-white rounded-full text-slate-400 text-[8px] md:text-[12px] lg:text-[12px]">Gaming Accessories</p></div>
              <div className="flex-row justify-between hover:p-1 cursor-pointer duration-300"><img src={Wearable} alt="" /><p className=" p-1 bg-white rounded-full text-slate-400 text-[9px] md:text-[12px] lg:text-[12px]">Wearables</p></div>
            </div>
          </section>

          <section className="relative p-10 pb-11 md:p-20 lg:p-20 bg-white items-center">
            <h1 className="font-bold text-slate-600 text-xl lg:text-center">Bestsellers</h1>
              <div className="overflow-x-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex space-x-4 w-max">
              <div className="relative border-slate-50 border-[2px] p-3 rounded-md w-56 md:w-56">
                  <div className="absolute bg-slate-100 rounded-full p-2"><Heart size={15} /></div>
                  <img src={BestOne} alt="" className="rounded-md" />
                  <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                  <span className="text-sm font-bold">iPhone 16 Teal</span>
                  <p className="text-xs text-gray-700">128GB 8GB RAM</p>
                  </div>
                  <span className="font-bold text-red-600">$25.99</span>
                  </div>
                  <button className="hover:bg-sky-700 text-gray-50 text-sm  bg-black py-2 rounded-md flex gap-3 justify-center items-center">Add to cart <ShoppingBag size={12} /></button>
                  </div>
                </div>

                <div className="relative border-slate-50 border-[2px] p-3 rounded-md w-56 md:w-56">
                  <div className="absolute bg-slate-100 rounded-full p-2"><Heart size={15} /></div>
                  <img src={BestOne} alt="" className="rounded-md" />
                  <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                  <span className="text-sm font-bold">iPhone 16 Teal</span>
                  <p className="text-xs text-gray-700">128GB 8GB RAM</p>
                  </div>
                  <span className="font-bold text-red-600">$25.99</span>
                  </div>
                  <button className="hover:bg-sky-700 text-gray-50 text-sm  bg-black py-2 rounded-md flex gap-3 justify-center items-center">Add to cart <ShoppingBag size={12} /></button>
                  </div>
                </div>

                <div className="relative border-slate-50 border-[2px] p-3 rounded-md w-56 md:w-56">
                  <div className="absolute bg-slate-100 rounded-full p-2"><Heart size={15} /></div>
                  <img src={BestOne} alt="" className="rounded-md" />
                  <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                  <span className="text-sm font-bold">iPhone 16 Teal</span>
                  <p className="text-xs text-gray-700">128GB 8GB RAM</p>
                  </div>
                  <span className="font-bold text-red-600">$25.99</span>
                  </div>
                  <button className="hover:bg-sky-700 text-gray-50 text-sm  bg-black py-2 rounded-md flex gap-3 justify-center items-center">Add to cart <ShoppingBag size={12} /></button>
                  </div>
                </div>

                <div className="relative border-slate-50 border-[2px] p-3 rounded-md w-56 md:w-56">
                  <div className="absolute bg-slate-100 rounded-full p-2"><Heart size={15} /></div>
                  <img src={BestOne} alt="" className="rounded-md" />
                  <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                  <span className="text-sm font-bold">iPhone 16 Teal</span>
                  <p className="text-xs text-gray-700">128GB 8GB RAM</p>
                  </div>
                  <span className="font-bold text-red-600">$25.99</span>
                  </div>
                  <button className="hover:bg-sky-700 text-gray-50 text-sm  bg-black py-2 rounded-md flex gap-3 justify-center items-center">Add to cart <ShoppingBag size={12} /></button>
                  </div>
                </div>

                <div className="relative border-slate-50 border-[2px] p-3 rounded-md w-56 md:w-56">
                  <div className="absolute bg-slate-100 rounded-full p-2"><Heart size={15} /></div>
                  <img src={BestOne} alt="" className="rounded-md" />
                  <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                  <span className="text-sm font-bold">iPhone 16 Teal</span>
                  <p className="text-xs text-gray-700">128GB 8GB RAM</p>
                  </div>
                  <span className="font-bold text-red-600">$25.99</span>
                  </div>
                  <button className="hover:bg-sky-700 text-gray-50 text-sm  bg-black py-2 rounded-md flex gap-3 justify-center items-center">Add to cart <ShoppingBag size={12} /></button>
                  </div>
                </div>

                


                

               

                


                

                

                

                

                </div>
              </div>
          </section>

          <section className="p-10 pb-11 md:p-20 lg:p-20 bg-black items-center">
            

          </section>

    </main>
  );
}

export default Homepage;
