import React, { useRef, useState, useEffect } from "react";
import "./Popup.css";
import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function PopupExample({ isVisible, togglePopup }) {
  if (!isVisible) return null;

  const otpInputs = useRef([]);
  const [captchaCode, setCaptchaCode] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);
  const [randomCaptcha, setRandomCaptcha] = useState(""); // Rastgele captcha için state

  // Komponent ilk yüklendiğinde rastgele captcha oluştur
  useEffect(() => {
    const generateCaptcha = () => {
      const captcha = Math.floor(1000 + Math.random() * 9000).toString(); // 1000 ile 9999 arasında rastgele sayı
      setRandomCaptcha(captcha);
    };
    generateCaptcha();
  }, []);

  const handleInputFocus = (index) => {
    if (otpInputs.current[index]) {
      otpInputs.current[index].focus(); // Current input üzerine odaklan
    }
  };

  const handleChange = (index, e) => {
    const { value } = e.target;

    // Eğer mevcut giriş doluysa bir sonraki girişe geç
    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }

    // Eğer mevcut giriş boşsa bir önceki girişe geç
    if (value.length === 0 && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleCaptchaChange = (e) => {
    const { value } = e.target;
    setCaptchaCode(value);
    setIsCaptchaValid(value === randomCaptcha); // Rastgele captcha kontrolü
  };

  // Popup'ı kapatma ve giriş alanlarını sıfırlama fonksiyonu
  const closePopup = () => {
 
    setCaptchaCode("");
    setIsCaptchaValid(true);
    otpInputs.current.forEach(input => {
      if (input) {
        input.value = ""; // Tüm giriş alanlarını temizle
      }
    });
    // Burayı kaldırdık
    togglePopup();
    console.log("baglandida ala")
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <Image
          src="/image/logo2.webp"
          width={120}
          height={80}
          alt="Gammanet.az"
          priority
          className="cursor-pointer bg-transparent rounded-md transition-all"
          style={{ background: "#ffff00", width: "120px", height: "80px" }}
        />
        <MdClose 
          color="black" 
          size={32} 
          className="bg-yellow-200 cursor-pointer rounded-lg absolute top-2 right-2" 
          onClick={closePopup} // Yeni fonksiyonu burada çağırıyoruz
        />

        <h2 className="text-xl font-semibold font-serif mt-8">OTP kodu daxil edin</h2>
        <div className="flex flex-row gap-4 items-center justify-center">
          {Array.from({ length: 4 }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 items-center text-center text-sm focus:outline-none border border-solid border-black rounded-md"
              ref={(el) => (otpInputs.current[index] = el)}
              onChange={(e) => handleChange(index, e)}
              onFocus={() => handleInputFocus(index)}
            />
          ))}
        </div>
        
        <div className="mt-4">
          <label className="text-lg">Robot olmadığını təsdiqlə : {randomCaptcha}</label> {/* Rastgele captcha gösteriliyor */}
          <input
            type="text"
            maxLength="4"
            className={`mt-2 w-full border ${isCaptchaValid ? "border-gray-400" : "border-red-500"} rounded-md p-2`}
            onChange={handleCaptchaChange}
            placeholder="Ekrandakı kodu daxil et"
          />
          {!isCaptchaValid && <span className="text-red-500">Kod yanlışdır.</span>}
        </div>

        <button
          onClick={togglePopup} // Bu buton hala togglePopup'ı çağırıyor
          className="bg-blue-200 text-blue-500 font-bold text-xl p-4 rounded-2xl shadow-lg hover:opacity-80 transition-all"
          disabled={!isCaptchaValid}
        >
          Təsdiq et
        </button>
      </div>
    </div>
  );
}
