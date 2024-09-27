import React, { useRef } from "react";
import "./Popup.css";
import Image from "next/image";

export default function PopupExample({ isVisible, togglePopup }) {
  if (!isVisible) return null;

  const otpInputs = useRef([]);

  const handleInputFocus = (index) => {
    if (otpInputs.current[index]) {
      otpInputs.current[index].focus(); // Focus on the current input
    }
  };

  const handleChange = (index, e) => {
    const { value } = e.target;

    // Move to the next input if the current input is filled
    if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }

    // Move to the previous input if the current input is empty and it's not the first one
    if (value.length === 0 && index > 0) {
      otpInputs.current[index - 1].focus();
    }
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
          style={{ background: "#ffff00",width:"120px",height:"80px" }}
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
        <button
          onClick={togglePopup}
          className="bg-blue-200 text-blue-500 font-bold text-xl p-4 rounded-2xl shadow-lg hover:opacity-80 transition-all"
        >
          Təsdiq et
        </button>
      </div>
    </div>
  );
}
