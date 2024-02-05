"use client";
import _default from "next/dist/shared/lib/runtime-config.external";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
  "/image/sekil1.png",
  "/image/sekil2.png",
  "/image/sekil3.png",
  "/image/sekil4.png",
  "/image/sekil5.png",
];

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Header = () => {
  return (
    <div className="relative flex flex-col-reverse   lg:pt-0 lg:flex-row-reverse lg:pb-0">

<div className="relative w-full max-w-xl mx-auto lg:pr-10 lg:mx-0 lg:w-3/6 xl:px-10">
  <Slider {...settings} className="mt-5 h-auto rounded-xl overflow-hidden">
    {images.map((image, index) => (
      <div key={index} className="carousel-item h-auto rounded-xl">
        <img
          alt={`Slide ${index + 1}`}
          className="shadow-xl object-cover object-center mx-auto w-full h-auto rounded-xl"
          src={image}
        />
      </div>
    ))}
  </Slider>
</div>

      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="text-center mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Yeni Brendiniz GammaNet
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            GammaNet Artıq
            <br className="hidden md:block" />{" "}
            <span className="inline-block text-deep-purple-accent-400">
              Hər Evdə
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            "İnnovativ texnologiya və əyləncənin bir araya gəldiyi Gammanet TV,
            ən yüksək keyfiyyətli yayım təcrübəsini təqdim edir. Limitsiz
            əyləncəni kəşf edin, arzuladığınız xəyalları bizimlə yaşayın!"
          </p>
          <div className="flex items-center  justify-center">
            <a
              href="/Muraciet"
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-black inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"
              style={{ background: "#ffff00" }}>
              Sifariş Et
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
