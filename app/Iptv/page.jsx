// components/IPTVComponent.js
import React from 'react';

const IPTVComponent = () => {
  return (
    <div className="font-custom  p-8 h-screen rounded-md shadow-md dark:text-black" >
      <h1 className="text-3xl font-bold mb-6">Gammanet - İPTV xidməti </h1>
      <p className="text-lg mb-4">
        Gammanet, İPTV (Internet Protocol Television) təqdim edən bir şirkətdir. İPTV, internet protokolu əsasında təqdim edilən televiziyaya verilən addır.
        Bu, ümumilikdə kabel və çanaq televiziyasının əvəzidir və dünyada insanlara geniş bir televiziya kanalları və içərik təmin edir.
        Gammanet İPTV xidmətləri geniş bir kanal seçimi təklif edir və bir çox istifadəçi üçün əyləncə və məlumatların əla bir birbaşa çatdırılma metodu kimi məşhurdur.
      </p>
      <h2 className="text-2xl font-bold mb-4">1. İPTV nədir?</h2>
      <p className="text-lg mb-4">
        İPTV, internet protokolu vasitəsilə televiziya xidmətlərinin təqdim edilməsinə əsaslanan bir texnologiyadır.
        Gammanet İPTV xidmətləri, geniş internet bağlantısı olan istifadəçilərə televiziya kanalları, filmlər, musiqilər və başqa multimedia içərik təklif edir.
      </p>
      <h2 className="text-2xl font-bold mb-4">2. İPTV-nin Əhəmiyyəti:</h2>
      <p className="text-lg mb-4">
        Gammanet İPTV-nin 320-dən çox kanal təklif etməsi, istifadəçilərə böyük bir çeşidi təqdim etməklə birləşir. Bu, müxtəlif maraqli və tələblərə cavab verən kanalların geniş bir siyahısına sahib olmağı deməkdir. İstifadəçilər televiziya kanalları arasında seçim edərək özlərinə ən maraqlı olanı tapa bilərlər.
      </p>
      <h2 className="text-2xl font-bold mb-4">3. İPTV-nin Üstünlükləri:</h2>
      <ul className="list-disc ml-6">
        <li className="text-lg mb-2">320-dən çox kanal: Gammanet İPTV, bir çox fərqli janrlarda 320-dən çox və keyfiyyət baxımından super kanallar təklif edir.</li>
        <li className="text-lg mb-2">Hərəkət halındakı tələbələr üçün əla: Gammanet İPTV, hərəkət halındakı istifadəçilər üçün əla bir seçimdir.</li>
        <li className="text-lg mb-2">İnteraktiv xidmətlər: Gammanet İPTV, interaktiv xidmətləri dəstəkləyir, buna görə istifadəçilər tərəfindən seçilmiş məzmunları əldə etmək və digər interaktiv tətbiqlərdə iştirak etmək mümkündür.</li>
      </ul>
    </div>
  );
};

export default IPTVComponent;
