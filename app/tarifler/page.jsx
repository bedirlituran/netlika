import React from "react";

const page = () => {
  return (
    <div className="p-20">

      <div className="flex-col items-center justify-start  gap-4  p-20 text-black shadow-2xl border border-yellow-400 rounded-xl">
        <div className="flex justify-center items-center">  
          <h1 className="font-bold text-3xl mb-4"> Şəxsi məlumatlarını qeyd et</h1>
        </div>
          <div className="flex justify-center items-center gap-4">
            <input type="text" placeholder="Ad" className="input input-bordered w-[150] max-w-xs" />
        <label htmlFor="soyad"></label>
        <input type="text" placeholder="Soyad" className="input input-bordered w-[150] max-w-xs" />
        <label htmlFor="mobil"></label>
        <input type="mobile" placeholder="Mobil" className="input input-bordered w-[150] max-w-xs" />
        <button className="p-5 bg-yellow-400 text-black rounded-xl ">Təsdiq et</button></div>

        <div className="flex justify-center items-center  mt-4">  
          <h1 className="font-bold text-3xl">Tarif paketini seç</h1>
        </div>
</div>
        
        
    </div>
  );
};


export default page;
