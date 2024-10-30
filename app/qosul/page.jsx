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
  const [otpSent, setOtpSent] = useState(false);

  const toggleOtpPopup = () => {
    setOtpVisible((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formattedPhoneNumber = "994" + data.prefix + data.phoneNumber;

      await sendOtp(formattedPhoneNumber);
      setOtpSent(true);
      toggleOtpPopup();
    } catch (error) {
      setError("OTP göndərmə xətası. Zəhmət olmasa, yenidən cəhd edin.");
    }
  };

  // AXIOS ILE OTP ISTEYI HELEKI SAXLADIQ
  const sendOtp = async (phoneNumber) => {
    const url = "/api/sms"; // Proxy ile yönlendirme yapılan endpoint
    const controlId = `control-${Date.now()}`;
    const otp = Math.floor(1000 + Math.random() * 9000);

    // XML məlumatları
    // const xmlData = `
    //   <request>
    //       <head>
    //           <operation>submit</operation>
    //           <login>gammanet</login>
    //           <password>G!.23Ea</password>
    //           <controlid>${controlId}</controlid>
    //           <bulkmessage>Sizin birdəfəlik şifrəniz ${otp}</bulkmessage>
    //           <title>GAMMANET</title>
    //           <scheduled>NOW</scheduled>
    //           <isbulk>false</isbulk>
    //       </head>
    //       <body>
    //           <msisdn>${phoneNumber}</msisdn>
    //           <message>Your OTP code is ${otp}</message>
    //       </body>
    //   </request>
    // `;

    try {
      // Artık proxy üzerinden yönlendirme yapılacak
      const response = await axios.post(url, xmlData, {
        headers: {
          "Content-Type": "application/xml",
          Accept: "application/xml",
        },
      });

      console.log("XML cavabı:", response.data);
      setOtpCode(otp.toString());
    } catch (error) {
      console.error("XML istəyi uğursuz oldu:", error);

      // Alternatif JSON isteği
      const jsonData = {
        msisdn: phoneNumber,
        message: `Your OTP code is ${otp}`,
        controlid: controlId,
        login: "gammanet",
        password: "G!.23Ea",
        title: "GAMMANET",
        scheduled: "NOW",
        isbulk: false,
      };

      try {
        const response = await axios.post(url, jsonData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        console.log("JSON cavabı:", response.data);
        setOtpCode(otp.toString());
      } catch (error) {
        console.error("uğursuz oldu:", error);
      }
    }
  };

  const handleOtpSubmit = async (enteredOtp) => {
    if (enteredOtp === otpCode.toString()) {
      setIsCheckboxDisabled(false);
      setIsPaymentEnabled(true);
      toggleOtpPopup();
      setError(null); // Xəta təmizlənir
    } else {
      setError("Səhv OTP kodu.");
    }
  };

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

  const handlePayment = () => {
    if (selectedPackage.length === 0) {
      console.log("Zəhmət olmasa, minimum 1 paket seçin.");
      return;
    }
    console.log("Ödəniş həyata keçirilir:", { selectedPackage, price });
  };

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
      <PopupExample
        isVisible={otpVisible}
        togglePopup={toggleOtpPopup}
        onSubmit={handleOtpSubmit}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-start p-5 md:p-24 text-black shadow-2xl border border-gray-400 rounded-xl">
          <h1 className="font-bold text-center md:text-3xl mb-5 md:mb-10">
            Şəxsi məlumatlarını qeyd et
          </h1>
          <input
            type="text"
            placeholder="Ad"
            className={`input input-bordered w-[70%] md:w-[300px] border-gray-400 bg-gray-100 mb-2 ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Ad sahəsi boş ola bilməz",
              minLength: { value: 3, message: "Ad ən az 3 hərf olmalıdır" },
              validate: (value) => {
                return (
                  /^[A-Za-zƏəÇçĞğİıÖöŞşÜü\s]+$/.test(value) ||
                  "Ad yalnız hərflərdən ibarət olmalıdır"
                );
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input
            type="text"
            placeholder="Soyad"
            className="input input-bordered w-[70%] md:w-[300px] border-gray-400 bg-gray-100 mb-2"
            {...register("surname", {
              required: "Soyad sahəsi boş ola bilməz",
              minLength: { value: 3, message: "Soyad ən az 3 hərf olmalıdır" },
              validate: (value) => {
                return (
                  /^[A-Za-zƏəÇçĞğİıÖöŞşÜü\s]+$/.test(value) ||
                  "Soyad yalnız hərflərdən ibarət olmalıdır"
                );
              },
            })}
          />
          {errors.surname && (
            <span className="text-red-500">{errors.surname.message}</span>
          )}
          <div className="flex items-center mb-2">
            <select
              className="input input-bordered w-[80px] border-gray-400 bg-gray-100 mr-2"
              {...register("prefix", { required: true })}
              defaultValue=""
            >
              <option
                value=""
                disabled
                hidden
                className="text-gray-400 flex items-center justify-center"
              >
                --
              </option>
              <option value="99">099</option>
              <option value="55">055</option>
              <option value="51">051</option>
              <option value="50">050</option>
              <option value="10">010</option>
              <option value="70">070</option>
              <option value="77">077</option>
              <option value="66">066</option>
            </select>
            <input
              type="text"
              placeholder="Telefon Nömrəsi"
              className="input input-bordered border-gray-400 w-full bg-gray-100"
              {...register("phoneNumber", {
                required: "Telefon nömrəsi boş ola bilməz",
                minLength: {
                  value: 7,
                  message: "Telefon nömrəsi 7 rəqəm olmalıdır",
                },
                maxLength: {
                  value: 7,
                  message: "Telefon nömrəsi 7 rəqəm olmalıdır",
                },
                pattern: {
                  value: /^\d+$/,
                  message:
                    "Telefon nömrəsi yalnız rəqəmlərdən ibarət olmalıdır",
                },
                validate: (value) =>
                  value[0] !== "0" || "Telefon nömrəsi 0 ilə başlamamalıdır",
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
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {otpSent && (
            <p className="text-green-500 mt-4">OTP kodu göndərildi!</p>
          )}
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <h1 className="font-bold text-center md:text-3xl">
              Tarif paketini seç
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center gap-4 mt-5">
          {[
  { name: "Standart Paket", price: "3" },
  { name: "Sport Paket", price: "5" },
  { name: "Super Paket", price: "10" }
].map((pkg) => (
  <div
    key={pkg.name}
    className="input input-bordered w-full  md:w-[300px] flex items-center justify-between border border-gray-300 bg-white rounded-lg shadow-md p-7 mb-3"
  >
    <input
      type="checkbox"
      id={pkg.name}
      value={pkg.name}
      disabled={isCheckboxDisabled}
      onChange={handleCheckboxChange}
      className="form-checkbox h-5 w-5 text-blue-600"
    />
    <label htmlFor={pkg.name} className="flex-1 text-lg ml-3 text-gray-800">
      {pkg.name}
    </label>
    <span className="text-lg font-semibold text-gray-800 px-2 py-1 rounded" style={{ background: '#ffff00' }}>
      {`${pkg.price} AZN`}
    </span>
  </div>
))}


            <button
              className={`bg-green-200 text-green-500 p-4 text-xl font-bold rounded-2xl shadow-md hover:opacity-80 transition-all ${
                !isPaymentEnabled && "opacity-50 cursor-not-allowed"
              }`}
              onClick={handlePayment}
              disabled={!isPaymentEnabled}
            >
              Ödəniş et (Cəmi: {price} AZN)
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
