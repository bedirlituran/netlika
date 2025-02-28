import React from 'react'

const Page = () => {
  return (
    <div className="container mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Məxfilik Siyasəti</h1>
      
      <p className="mb-4">Son yenilənmə tarixi: 28 Fevral 2025</p>
      
      <h2 className="text-2xl font-semibold mt-6">1. Giriş</h2>
      <p className="mb-4">Bu Məxfilik Siyasəti Gammanet-in istifadəçilərindən topladığı məlumatları və onların istifadəsini izah edir.</p>
      
      <h2 className="text-2xl font-semibold mt-6">2. Hansı Məlumatları Toplayırıq?</h2>
      <ul className="list-disc pl-6">
        <li>Ad, soyad, e-poçt və əlaqə məlumatları</li>
        <li>IP ünvanı və cihaz məlumatları</li>
        <li>Saytımızdakı fəaliyyətlər və analitik məlumatlar</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">3. Məlumatların İstifadəsi</h2>
      <p>Toplanan məlumatlar aşağıdakı məqsədlər üçün istifadə edilə bilər:</p>
      <ul className="list-disc pl-6">
        <li>Xidmətlərimizin inkişaf etdirilməsi</li>
        <li>Müştəri dəstəyi göstərilməsi</li>
        <li>Reklam və marketinq</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">4. Məlumatların Paylaşılması</h2>
      <p>Biz şəxsi məlumatlarınızı üçüncü tərəflərlə paylaşmırıq, yalnız qanuni tələblər daxilində hüquq-mühafizə orqanları ilə paylaşa bilərik.</p>
      
      <h2 className="text-2xl font-semibold mt-6">5. Təhlükəsizlik</h2>
      <p>Biz istifadəçilərimizin məlumatlarını qorumaq üçün müxtəlif təhlükəsizlik tədbirləri görürük.</p>
      
      <h2 className="text-2xl font-semibold mt-6">6. İstifadəçi Hüquqları</h2>
      <p>İstifadəçilər şəxsi məlumatlarını əldə etmək, dəyişdirmək və silmək hüququna malikdirlər.</p>
      
      <h2 className="text-2xl font-semibold mt-6">7. Dəyişikliklər və Əlaqə</h2>
      <p>Bu siyasət vaxtaşırı yenilənə bilər. Əgər sualınız varsa, bizimlə <a href="mailto:info@gammanet.com" className="text-blue-500">info@gammanet.com</a> e-poçtu vasitəsilə əlaqə saxlaya bilərsiniz.</p>
    </div>
  )
}

export default Page