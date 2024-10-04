"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./page.css";
import PopupExample from "@/components/PopupExample/PopupExample";

const Page = () => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState([]);
  const [price, setPrice] = useState(0);
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState(null);

  const toggleOtpPopup = () => {
    setOtpVisible((prev) => !prev);
  };

  // React Hook Form kullanımı
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form gönderildiğinde OTP doğrulama açılır ve OTP gönderilir
  const onSubmit = async (data) => {
    try {
      await sendOtp(data.prefix + data.phoneNumber);
      toggleOtpPopup();
    } catch (error) {
      setError("OTP gönderme hatası. Lütfen tekrar deneyin.");
    }
  };

  // OTP gönderme fonksiyonu
  const sendOtp = async (phoneNumber) => {
    const url = "http://sendsms.az/smxml/api"; // API URL
    const controlId = `control-${Date.now()}`;
    const otp = Math.floor(1000 + Math.random() * 9000);
    const data = `
    <request>
        <head>
            <operation>submit</operation>
            <login>gammanet</login> <!-- Login -->
            <password>G!.23Ea</password> <!-- Password -->
            <controlid>${controlId}</controlid>
            <bulkmessage>message</bulkmessage>
            <title>GAMMANET</title> <!-- Title -->
            <scheduled>NOW</scheduled>
            <isbulk>false</isbulk>
        </head>
        <body>
            <msisdn>${phoneNumber}</msisdn>
            <message>Your OTP code is ${otp}</message>
        </body>
    </request>
    `;

    setOtpCode(otp);
    try {
      await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      console.log("OTP başarıyla gönderildi:", otp);
    } catch (error) {
      setError("OTP gönderme hatası. Lütfen tekrar deneyin.");
      console.error('Hata:', error);
    }
  };

  // OTP doğrulandıktan sonra checkbox ve ödeme aktif edilir
  const handleOtpSubmit = async (enteredOtp) => {
    if (enteredOtp === otpCode.toString()) {
      setIsCheckboxDisabled(false);
      setIsPaymentEnabled(true);
      toggleOtpPopup();
    } else {
      setError("Yanlış OTP kodu.");
    }
  };

  // Paket seçimini yönetir
  const handleCheckboxChange = (e) => {
    const clickedPackage = e.target.value;
    if (selectedPackage.includes(clickedPackage)) {
      setSelectedPackage(
        selectedPackage.filter((pkg) => pkg !== clickedPackage)
      );
    } else {
      setSelectedPackage([...selectedPackage, clickedPackage]);
    }
  };

  // Ödeme işlemini yönetir
  const handlePayment = () => {
    if (selectedPackage.length === 0) {
      console.log("Zəhmət olmasa, minimum 1 paket seçin.");
      return;
    }
    console.log("Ödeme yapılıyor:", { selectedPackage, price });
  };

  // Seçili paketlerin fiyatını hesaplar
  useEffect(() => {
    let total = 0;
    selectedPackage.forEach((pkg) => {
      switch (pkg) {
        case "3azn":
          total += 3;
          break;
        case "5azn":
          total += 5;
          break;
        case "10azn":
          total += 10;
          break;
        default:
          break;
      }
    });
    setPrice(total);
  }, [selectedPackage]);

  return (
    <div className="container mx-auto p-5 md:p-20">
      {/* OTP Popup Bileşeni */}
      <PopupExample
        isVisible={otpVisible}
        togglePopup={toggleOtpPopup}
        onSubmit={handleOtpSubmit}
      />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-start p-5 md:p-24 text-black shadow-2xl border border-gray-400 rounded-xl">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-center md:text-3xl mb-5 md:mb-10">
              Şəxsi məlumatlarını qeyd et
            </h1>
          </div>

          {/* Ad alanı */}
          <input
            type="text"
            placeholder="Ad"
            className={`input input-bordered w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2 ${errors.name ? "border-red-500" : ""
              }`}
            {...register("name", {
              required: "Ad sahəsi boş ola bilməz",
              minLength: { value: 2, message: "Ad ən az 2 hərf olmalıdır" },
            })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}

          {/* Soyad alanı */}
          <input
            type="text"
            placeholder="Soyad"
            className="input input-bordered w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2"
            {...register("surname", {
              required: "Soyad sahəsi boş ola bilməz",
              minLength: { value: 2, message: "Soyad ən az 2 hərf olmalıdır" },
            })}
          />
          {errors.surname && (
            <span className="text-red-500">{errors.surname.message}</span>
          )}

          {/* Telefon Numarası */}
          <div className="flex items-center mb-2">
            <select
              className="input input-bordered w-[100px] border-gray-400 bg-gray-100 mr-2"
              {...register("prefix", { required: true })}
              defaultValue=""
            >
              <option value="" disabled hidden>
                --
              </option>
              <option value="099">099</option>
              <option value="055">055</option>
              <option value="051">051</option>
              <option value="050">050</option>
              <option value="070">070</option>
              <option value="077">077</option>
            </select>
            <input
              type="text"
              placeholder="Telefon Nömrəsi"
              className="input input-bordered border-gray-400 w-full bg-gray-100"
              {...register("phoneNumber", {
                required: "Telefon nömrəsi boş ola bilməz",
                minLength: { value: 7, message: "Telefon nömrəsi 7 rəqəm olmalıdır" },
                maxLength: { value: 7, message: "Telefon nömrəsi 7 rəqəm olmalıdır" },
                pattern: { value: /^[0-9]+$/, message: "Telefon nömrəsi yalnız rəqəmlərdən ibarət olmalıdır" },
              })}
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}

          {/* Təsdiq Et Butonu */}
          <button
            type="submit"
            className="bg-blue-200 text-blue-500 p-4 text-xl font-bold rounded-2xl shadow-md hover:opacity-80 transition-all"
          >
            Təsdiq et
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {/* Paket Seçimi */}
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <h1 className="font-bold text-center md:text-3xl">Tarif paketini seç</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-5">
            {["3azn", "5azn", "10azn"].map((pkg) => (
              <div
                key={pkg}
                className="w-full md:w-[400px] p-3 flex gap-2 items-center justify-around border-2 border-gray-400 rounded-md"
              >
                <input
                  type="checkbox"
                  value={pkg}
                  onChange={handleCheckboxChange}
                  disabled={!isPaymentEnabled} // Ödeme butonu aktifse checkbox'lar aktif
                />
                <label className="text-xl">{pkg}</label>
              </div>
            ))}
          </div>

          {/* Ödeme Butonu */}
          <button
            type="button"
            onClick={handlePayment}
            className={`bg-green-300 text-white p-4 text-xl font-bold rounded-2xl shadow-md hover:opacity-80 transition-all mt-8 ${isCheckboxDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
            disabled={isCheckboxDisabled}
          >
            Ödə
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
