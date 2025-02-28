"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Popup.css";
import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function PopupExample({ isVisible, togglePopup, otpTesdiq }) {
  if (!isVisible) return null;

  const otpInputs = useRef([]);
  const [captchaCode, setCaptchaCode] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [randomCaptcha, setRandomCaptcha] = useState("");

  useEffect(() => {
    const generateCaptcha = () => {
      const captcha = Math.floor(1000 + Math.random() * 9000).toString();
      setRandomCaptcha(captcha);
    };
    generateCaptcha();
  }, []);

  const handleInputFocus = (index) => {
    otpInputs.current[index]?.focus();
  };

  const handleChange = (index, e) => {
    const { value } = e.target;

    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleCaptchaChange = (e) => {
    const { value } = e.target;
    setCaptchaCode(value);
    setIsCaptchaValid(value === randomCaptcha);
  };

  const closePopup = () => {
    setCaptchaCode("");
    setIsCaptchaValid(true);
    otpInputs.current.forEach(input => input.value = "");
    togglePopup();
  };

  const handleSubmit = () => {
    const temp = otpInputs.current[0].value + otpInputs.current[1].value + otpInputs.current[2].value + otpInputs.current[3].value;

    if (isCaptchaValid && temp == otpTesdiq) {
      console.log( otpTesdiq);

      console.log("OTP doğrulandı"); // Örnek olarak bir log.
    togglePopup();

    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <Image
          src="/image/logo2.png"
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
          onClick={closePopup}
        />

        <h2 className="text-xl font-semibold font-serif mt-8">OTP kodu daxil edin</h2>
        <div className="flex flex-row gap-4 font-bold  items-center justify-center">
          {Array.from({ length: 4 }, (_, index) => (
            <input
         
              key={index}
              type="number"
              maxLength="1"
              className="w-12 h-12 items-center text-center text-2xl focus:outline-none border border-solid border-gray-600 rounded-md appearance-none"
              ref={(el) => (otpInputs.current[index] = el)}
              onChange={(e) => handleChange(index, e)}
              onFocus={() => handleInputFocus(index)}
            />
          ))}
        </div>
        
        <div className="mt-4">
          <label className="text-lg">Robot olmadığını təsdiqlə : <span className="bg-yellow-300 bg-opacity-20 p-2 rounded-lg font-light text-green-800 text-opacity-30 tracking-wider filter blur-xs select-none shadow-lg ">{randomCaptcha}</span></label>
          <input
            type="text"
            maxLength="4"
            className={`mt-2 w-full border ${isCaptchaValid ? "border-gray-400" : "border-red-500"} rounded-md p-2`}
            onChange={handleCaptchaChange}
            placeholder="Ekrandakı kodu daxil et"
          />
          {!isCaptchaValid && isCaptchaValid == "" && <span className="text-red-500">Kod yanlışdır.</span>}
        </div>

        <button
          onClick={handleSubmit} // Doğrulama işlemi için ayrı bir fonksiyon
          className="bg-blue-200 text-blue-500 font-bold text-xl p-4 rounded-2xl shadow-lg hover:opacity-80 transition-all"
          disabled={!isCaptchaValid}
        >
          Təsdiq et
        </button>
      </div>
    </div>
  );
}
