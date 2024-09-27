"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./page.css";
import PopupExample from "@/components/PopupExample/PopupExample";

const Page = () => {
  const [otpVisible, setOtpVisible] = useState(false); // OTP pop-up durumu
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true); // Checkbox'lar başlangıçta pasif
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false); // Ödeme butonu başlangıçta pasif
  const [selectedPackage, setSelectedPackage] = useState([]); // Seçili paketler
  const [price, setPrice] = useState(0); // Seçilen paketlerin toplam fiyatı

  const toggleOtpPopup = () => {
    setOtpVisible((prev) => !prev);
  };

  // React Hook Form kullanımı
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form gönderildiğinde OTP doğrulama açılır
  const onSubmit = (data) => {
    toggleOtpPopup(); // OTP pop-up açılır
  };

  // OTP doğrulandıktan sonra checkbox ve ödeme aktif edilir
  const handleOtpSubmit = async (otp) => {
    try {
      // OTP doğrulama işlemi yapılmalı
      setIsCheckboxDisabled(false); // Checkbox'lar aktif edilir
      setIsPaymentEnabled(true); // Ödeme butonu aktif edilir
      toggleOtpPopup(); // OTP pop-up kapanır
    } catch (error) {
      console.error("OTP doğrulama hatası:", error);
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
            className={`input input-bordered w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2 ${
              errors.name ? "border-red-500" : ""
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

          {/* Paket Seçimi */}
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <h1 className="font-bold text-center md:text-3xl">Tarif paketini seç</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-5">
            {["3azn", "5azn", "10azn"].map((pkg) => (
              <div
                key={pkg}
                className="w-full md:w-[400px] p-3 flex gap-2 items-center justify-around bg-gray-100 border border-gray-400 rounded-lg"
              >
                <input
                  type="checkbox"
                  className="checkbox border-gray-400 bg-blue-200 checked:bg-blue-200"
                  value={pkg}
                  onChange={handleCheckboxChange}
                  disabled={isCheckboxDisabled}
                />
                <h1>{`Standart - ${pkg} (SuperSport daxil)`}</h1>
                <button className="flex bg-blue-200 text-blue-500 font-semibold text-lg p-2 rounded-2xl">
                  {pkg.toUpperCase()}
                </button>
              </div>
            ))}
          </div>

          {/* Toplam Fiyat ve Ödeme Butonu */}
          <div className="flex-col text-center space-y-4 mt-8 md:mt-12">
            <h1 className="font-bold text-3xl">Təsdiqlə və qoşul</h1>
            <p className="font-extrabold text-2xl text-black">{price} AZN</p>
            <button
              type="button"
              className="bg-blue-200 text-blue-500 font-bold text-xl p-4 rounded-2xl shadow-lg hover:opacity-80 transition-all"
              onClick={handlePayment}
              disabled={!isPaymentEnabled}
            >
              Ödəniş et
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
