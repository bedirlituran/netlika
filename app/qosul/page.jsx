"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"; 
// import axios from "axios";
import "./page.css";

const Page = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [price, setPrice] = useState(0);

  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    if (selectedPackage !== null) {
      switch (selectedPackage) {
        case "3azn":
          setPrice(3);
          break;
        case "5azn":
          setPrice(5);
          break;
        case "10azn":
          setPrice(10);
          break;
        case "15azn":
          setPrice(15);
          break;
        case "60azn":
          setPrice(60);
          break;
        case "100azn":
          setPrice(100);
          break;
        default:
          setPrice(0);
          break;
      }
    }
  }, [selectedPackage]);

  // Handle package selection
  const handleCheckboxChange = (e) => {
    const clickedPackage = e.target.value;
    setSelectedPackage(clickedPackage !== selectedPackage ? clickedPackage : null);
  };

  // Form submission
  const onSubmit = (data) => {
    if (!selectedPackage) {
      console.log("Zəhmət olmasa, minimum 1 paket seçin.");
      return;
    }


    // axios.post("", { name: data.name }).then((response) => {
    //   console.log("Form submitted", response.data);
    // });

    console.log("Form uğurla göndərildi", { ...data, selectedPackage });
  };

  const packages = watch("packages") || [];

  return (
    <div className="container mx-auto p-5 md:p-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-start p-5 md:p-24 text-black shadow-2xl border border-gray-400 rounded-xl">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-center md:text-3xl mb-5 md:mb-10">
              Şəxsi məlumatlarını qeyd et
            </h1>
          </div>

          {/* Name field */}
          <div className="flex flex-col justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Ad"
              className={`input input-bordered placeholder:opacity-75 w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2 ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name", {
                required: "Ad sahəsi boş ola bilməz",
                minLength: { value: 2, message: "Ad ən az 2 hərf olmalıdır" },
                pattern: { value: /^[A-Za-z]+$/, message: "Ad yalnız hərflərdən ibarət olmalıdır" },
              })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

            {/* Soyad field */}
            <input
              type="text"
              placeholder="Soyad"
              className="input input-bordered placeholder:opacity-75 w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2"
              {...register("surname", {
                required: "Soyad sahəsi boş ola bilməz",
                minLength: { value: 2, message: "Soyad ən az 2 hərf olmalıdır" },
                pattern: { value: /^[A-Za-z]+$/, message: "Soyad yalnız hərflərdən ibarət olmalıdır" },
              })}
            />
            {errors.surname && <span className="text-red-500">{errors.surname.message}</span>}

            {/* Phone number field */}
            <div className="flex items-center mb-2">
              <select
                className="input input-bordered placeholder:opacity-75 w-[100px] border-gray-400 bg-gray-100 mr-2"
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
                className="input input-bordered placeholder:opacity-50 border-gray-400 w-full bg-gray-100"
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

            <button
              type="submit"
              className="bg-blue-200 text-blue-500 p-4 text-xl font-bold rounded-2xl shadow-md hover:opacity-80 transition-all"
            >
              Təsdiq et
            </button>
          </div>

          {/* Package Selection */}
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <h1 className="font-bold text-center md:text-3xl">Tarif paketini seç</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-5">
            {/* Package options */}
            {["3azn", "5azn", "10azn"].map((pkg) => (
              <div
                key={pkg}
                className="w-full md:w-[400px] p-3 flex gap-2 items-center justify-around bg-gray-100 border border-gray-400 rounded-lg"
              >
                <input
                  type="checkbox"
                  className="checkbox border-gray-400 bg-blue-200 checked:bg-blue-200"
                  value={pkg}
                  {...register("packages", {
                    validate: (value) => value.length > 0 || "Minimum 1 paket seçilməlidir",
                  })}
                  onChange={handleCheckboxChange}
                  checked={selectedPackage === pkg}
                />
                <h1>{`Standart - ${pkg} (SuperSport daxil)`}</h1>
                <button className="flex bg-blue-200 text-blue-500 font-semibold text-lg p-2 rounded-2xl">
                  {pkg.toUpperCase()}
                </button>
              </div>
            ))}
            {errors.packages && <span className="text-red-500">{errors.packages.message}</span>}
          </div>

          {/* Price and Payment Button */}
          <div className="flex-col text-center space-y-4 mt-8 md:mt-12">
            <h1 className="font-bold text-3xl">Təsdiqlə və qoşul</h1>
            <p className="font-extrabold text-2xl text-black">{price} AZN</p>
            <button
              type="button"
              className="bg-blue-200 text-blue-500 font-bold text-xl p-4 rounded-2xl shadow-lg hover:opacity-80 transition-all"
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
