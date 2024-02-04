import _default from "next/dist/shared/lib/runtime-config.external";

const Header = () => {
  return (
    <div className="dark:text-white relative flex flex-col-reverse  py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover object-center w-full h-[300px] rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-[470px]"
          src="/image/slide1.webp"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="text-center mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Yeni Brendiniz GammaNet
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            GammaNet Artıq
            <br className="hidden md:block" />
            {' '}
            <span className="inline-block text-deep-purple-accent-400">
              Hər Evdə
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
           "İnnovativ texnologiya və əyləncənin bir araya gəldiyi Gammanet TV, ən yüksək keyfiyyətli yayım təcrübəsini təqdim edir. Limitsiz əyləncəni kəşf edin, arzuladığınız xəyalları bizimlə yaşayın!"
          </p>
          <div className="flex items-center  justify-center">
            <a
              href="/Muraciet"
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-black inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': '#ffff00' }}
            >
              Sifariş Et
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
