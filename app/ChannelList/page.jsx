

const channels = [
  { id: 1, name: 'Aztv' },
  { id: 2, name: 'Aztv HD' },
  { id: 3, name: 'Mədəniyyət' },
  { id: 4, name: 'Mədəniyyət HD' },
  { id: 5, name: 'İdman Azərbaycan' },
  { id: 6, name: 'İdman Azərbaycan HD' },
  { id: 7, name: 'Azad Azərbaycan' },
  { id: 8, name: 'Azad Azərbaycan HD' },
  { id: 9, name: 'Xəzər Tv' },
  { id: 10, name: 'Xəzər Tv HD' },
  { id: 11, name: 'Space' },
  { id: 12, name: 'İctimai Tv' },
  { id: 13, name: 'İctimai HD' },
  { id: 14, name: 'Cbc Azərbaycan' },
  { id: 15, name: 'Cbc sport HD' },
  { id: 16, name: 'Dünya TV' },
  { id: 17, name: 'Аrb TV' },
  { id: 18, name: 'Arb günəş' },
  { id: 19, name: 'Arb24	' },
  { id: 20, name: 'Arb24 HD	' },
  { id: 21, name: 'Real TV' },
  { id: 22, name: 'Real TV HD' },
  { id: 23, name: 'Səhiyyə	' },
  { id: 24, name: 'Первый HD' },
  { id: 25, name: 'Первый	' },
  { id: 26, name: 'Россия 1' },
  { id: 27, name: 'Россия 1 HD' },
  { id: 28, name: 'НТB	' },
  { id: 29, name: 'НТB HD	' },
  { id: 30, name: 'THT' },
  { id: 31, name: 'THT HD' },
  { id: 32, name: 'THT 4' },
  { id: 33, name: 'TB-3' },
  { id: 34, name: 'CTC' },
  { id: 35, name: 'REN TV' },
  { id: 36, name: 'Россия - kultura' },
  { id: 37, name: 'ТВ Центр' },
  { id: 38, name: 'Звезда	' },
  { id: 39, name: 'Че' },
  { id: 40, name: 'Домашний' },
  { id: 41, name: 'Пятница' },
  { id: 42, name: '5 Kanal	' },
  { id: 43, name: 'Bремя	' },
  { id: 44, name: 'MИР' },
  { id: 45, name: 'PTP Планета 	' },
  { id: 46, name: 'Русский еkстрим' },
  { id: 47, name: 'Россия 24' },
  { id: 48, name: 'MИР 24	' },
  { id: 49, name: 'Euronews' },
  { id: 50, name: 'РБК' },
  { id: 51, name: 'Tv 1000' },
  { id: 52, name: 'Tv 1000 action' },
  { id: 53, name: 'Tv 1000 Русское кинo' },
  { id: 54, name: 'TV XXI' },
  { id: 55, name: 'Кинокомедиа' },
  { id: 56, name: 'Киномиx' },
  { id: 57, name: 'Киномиx HD' },
  { id: 58, name: 'Киносвидание	' },
  { id: 59, name: 'Киносемья	' },
  { id: 60, name: 'Киносерия' },
  { id: 61, name: 'Кинохит		' },
  { id: 62, name: 'Кино TB	' },
  { id: 63, name: 'Кино TB HD' },
  { id: 64, name: 'Кинопремьера HD' },
  { id: 65, name: 'Мужское кино' },
  { id: 66, name: 'Мужское кино HD' },
  { id: 67, name: 'Индийское кино' },
  { id: 68, name: 'Любимойe кино ' },
  { id: 69, name: 'Pадной  Кино	' },
  { id: 70, name: 'русский бестселлер' },
  { id: 71, name: 'русский иллюзион' },
  { id: 72, name: 'русский roman' },
  { id: 73, name: 'дом кино' },
  { id: 74, name: ' Домашнего Кино Премия HD ' },
  { id: 75, name: 'наше новое кино'},
  { id: 76, name: 'иллюзия +	' },
  { id: 77, name: 'мир сериала' },
  { id: 78, name: 'Fox russia	' },
  { id: 79, name: 'Fox russia HD' },
  { id: 80, name: 'Fox life' },
  { id: 81, name: 'еврокино	' },
  { id: 82, name: 'парк развлечений' },
  { id: 83, name: 'Amedia 1' },
  { id: 84, name: 'Amedia 2' },
  { id: 85, name: '	Amedia  xit' },
  { id: 86, name: 'Amedia Premium' },
  { id: 87, name: 'HCT' },
  { id: 88, name: 'Hollywood' },
  { id: 89, name: 'Hollywood HD' },
  { id: 90, name: 'FastFun Box	' },
  { id: 91, name: 'Sony-skyFi' },
  { id: 92, name: 'Sony Turbo' },
  { id: 93, name: 'Vip Megahit	' },
  { id: 94, name: 'Vip Megahit HD	' },
  { id: 95, name: 'Vip Premiere' },
  { id: 96, name: 'Vip Premiere HD' },
  { id: 97, name: 'Vip Comedy HD' },
  { id: 98, name: 'Bridge TV' },
  { id: 99, name: 'Bridge TV HD	' },
  { id: 100, name: 'Bridge TV Русский хит	' },
  { id: 101, name: 'Bridge TV classic' },
  { id: 102, name: 'МCM top	' },
  { id: 103, name: 'МCM Dance Russia' },
  { id: 104, name: 'Mtv Russia	' },
  { id: 105, name: 'Muz Tv AZ' },
  { id: 106, name: 'Ru TV' },
  { id: 107, name: 'THT Music' },
  { id: 108, name: 'VH-1 classic' },
  { id: 109, name: 'VH-1 europe' },
  { id: 110, name: 'Европа плюс ТВ'},
  { id: 111, name: 'Жара' },
  { id: 112, name: 'Lya Minor Tv' },
  { id: 113, name: 'муз тв' },
  { id: 114, name: 'музыка первово'},
  { id: 115, name: 'Шансон ТВ' },
  { id: 116, name: '24 Texno	' },
  { id: 117, name: '2x2	' },
  { id: 118, name: 'CBC Reality	' },
  { id: 119, name: 'Fashion Tv' },
  { id: 120, name: 'Fashion HD	' },
  { id: 121, name: 'Fine living	' },
  { id: 122, name: 'Food Network Russia' },
  { id: 123, name: 'Rtg Tv' },
  { id: 124, name: 'Rtg Tv HD' },
  { id: 125, name: 'Tlc Russia	' },
  { id: 126, name: 'World Fassion' },
  { id: 127, name: 'ABTO 24' },
  { id: 128, name: 'авто плюс'},
  { id: 129, name: 'Бобер ТВ' },
  { id: 130, name: 'домашние животные' },
  { id: 131, name: 'загородная жизнь  ' },
  { id: 132, name: 'KBH TV	' },
  { id: 133, name: 'кухня ТB' },
  { id: 134, name: 'Mama' },
  { id: 135, name: 'моя планета  ' },
  { id: 136, name: 'охота и рыбалка  ' },
  { id: 137, name: 'CTC Love' },
  { id: 138, name: 'Telekafe' },
  { id: 139, name: 'ю-тв' },
  { id: 140, name: 'Ani Tv	' },
  { id: 141, name: 'Cartoon Network Russia' },
  { id: 142, name: 'Disney channel rus' },
  { id: 143, name: 'Gulli girl' },
  { id: 144, name: 'Jim Jam	' },
  { id: 145, name: 'Nickelodeon' },
  { id: 146, name: 'Nickelodeon HD' },
  { id: 147, name: 'Nickelodeon junior' },
  { id: 148, name: 'Tiji' },
  { id: 149, name: 'Детский' },
  { id: 150, name: 'Детский мир телеклуба	' },
  { id: 151, name: 'Карусель	' },
  { id: 152, name: 'Мульт	' },
  { id: 153, name: 'Мультимания	' },
  { id: 154, name: 'Tlum HD	' },
  { id: 155, name: '365 дней	' },
  { id: 156, name: 'Animal Planet Russia' },
  { id: 157, name: 'Animal Planet HD	' },
  { id: 158, name: 'Da Vinci Learning	' },
  { id: 159, name: 'Discovery channel	' },
  { id: 160, name: 'Discovery science' },
  { id: 161, name: 'Discovery Turbo Ekstra' },
  { id: 162, name: 'History' },
  { id: 163, name: 'Investigation Discovery' },
  { id: 164, name: 'Nat Geo Wild Russia	' },
  { id: 165, name: 'Nat Geo Wild HD' },
  { id: 166, name: 'National Geographic	' },
  { id: 167, name: 'National Geographic HD	' },
  { id: 168, name: 'Viasat Explore' },
  { id: 169, name: 'Viasat History' },
  { id: 170, name: 'Viasat Nature' },
  { id: 171, name: 'Viasat Nature HD' },
  { id: 173, name: 'Viasat Planet' },
  { id: 174, name: 'Dikiy' },
  { id: 175, name: 'Доктор ТВ' },
  { id: 176, name: 'Планета Живая ' },
  { id: 176, name: 'Зоопарк' },
  { id: 177, name: 'Иcтория' },
  { id: 178, name: 'Кто есть кто?' },
  { id: 179, name: 'Наука 2' },
  { id: 180, name: 'Ностальгия' },
  { id: 181, name: 'Соверенно секретно  ' },
  { id: 182, name: 'Диката оxота HD' },
  { id: 183, name: 'Диката рыбалка HD' },
  { id: 184, name: 'Discovery channel HD' },
  { id: 185, name: 'Eurosport 1' },
  { id: 186, name: 'Eurosport 1 HD' },
  { id: 187, name: 'Eurosport 2' },
  { id: 188, name: 'Eurosport 2 HD' },
  { id: 189, name: 'Setanta sports' },
  { id: 190, name: 'Setanta sports +' },
  { id: 191, name: 'Boks TV' },
  { id: 192, name: 'Кхл ТВ'},
  { id: 193, name: 'Кхл ТВ HD' },
  { id: 194, name: 'Матч ТВ' },
  { id: 195, name: 'Матч ТВ HD' },
  { id: 196, name: 'Матч-арена HD' },
  { id: 197, name: 'Матч-арена' },
  { id: 198, name: 'Матц Боeц' },
  { id: 199, name: 'Матч игра' },
  { id: 200, name: 'Матч игра HD' },
  { id: 201, name: 'Матч наш спорт' },
  { id: 202, name: 'Матч Планета' },
  { id: 203, name: 'Матч-праймерa' },
  { id: 204, name: 'Матч cтрана  ' },
  { id: 205, name: 'Матч Футболь 1' },
  { id: 206, name: 'Матч Футболь 1 HD' },
  { id: 207, name: 'Матч Футболь 2' },
  { id: 208, name: 'Матч Футболь 2 HD' },
  { id: 209, name: 'Матч Футболь 3' },
  { id: 210, name: 'Матч Футболь 3 HD' },
  { id: 211, name: 'Нaш футбол' },
  { id: 212, name: 'Нaш футбол HD' },
  { id: 213, name: 'Tелеканал футбол' },
  { id: 214, name: 'Viasat Futbol' },
  { id: 215, name: 'Viasat Sport' },
  { id: 216, name: 'Viasat Serial' },
  { id: 217, name: 'Конный Мир HD' },
  { id: 218, name: 'Atv Turkiye' },
  { id: 219, name: 'Atv Turkiye HD' },
  { id: 220, name: 'Star Tv' },
  { id: 221, name: 'Star Tv HD' },
  { id: 222, name: 'Kanal D HD' },
  { id: 223, name: 'Fox Tv Turkiye' },
  { id: 224, name: 'Show Tv' },
  { id: 225, name: 'Show Tv HD' },
  { id: 226, name: 'Kanal 7' },
  { id: 227, name: 'Kanal 7 HD' },
  { id: 228, name: 'TRT Turkiye' },
  { id: 229, name: 'TRT Turk HD' },
  { id: 230, name: 'TRT 1' },
  { id: 231, name: 'TRT 1 HD' },
  { id: 232, name: 'TRT 2 HD' },
  { id: 233, name: 'TRT Avaz' },
  { id: 234, name: 'TRT Avaz HD' },
  { id: 235, name: 'TV8' },
  { id: 236, name: 'TV8 HD' },
  { id: 237, name: 'TV* Int' },
  { id: 238, name: 'TV 8,5 HD' },
  { id: 239, name: 'A2 TV' },
  { id: 240, name: 'Beyaz Tv' },
  { id: 241, name: 'Beyaz Tv HD' },
  { id: 242, name: 'Teve2' },
  { id: 243, name: 'Teve2 HD' },
  { id: 244, name: 'TRT Belgesel' },
  { id: 245, name: 'TRT Belgesel HD' },
  { id: 246, name: 'Dmax' },
  { id: 247, name: 'Dmax HD' },
  { id: 248, name: 'Yaban Tv' },
  { id: 249, name: 'TLC Turkiye' },
  { id: 250, name: 'TLC Turkiye HD' },
  { id: 251, name: 'TRT Cocuk' },
  { id: 252, name: 'TRT Cocuk HD' },
  { id: 253, name: 'Cartoon Network Turk' },
  { id: 254, name: 'Minika Cocuk' },
  { id: 255, name: 'Minika Go' },
  { id: 256, name: 'TRT Music' },
  { id: 257, name: 'Dream Tv' },
  { id: 258, name: 'Dream Tv HD' },
  { id: 259, name: 'NR1 Turkey HD' },
  { id: 260, name: 'Power Tv HD' },
  { id: 261, name: 'Power Turkey HD' },
  { id: 262, name: 'TMB Turkey HD' },
  { id: 263, name: 'TRT Music HD' },
  { id: 264, name: 'Viva TV' },
  { id: 265, name: 'TRT Haber' },
  { id: 266, name: 'TRT Haber HD' },
  { id: 267, name: 'A Haber HD' },
  { id: 268, name: 'A Haber' },
  { id: 269, name: 'Haber Turk' },
  { id: 270, name: 'Haber Turk HD' },
  { id: 271, name: 'CNN Turkiye' },
  { id: 272, name: 'CNN Turkiye HD' },
  { id: 273, name: 'NTV Turkiye' },
  { id: 274, name: 'NTV Turkiye HD' },
  { id: 275, name: 'TRT sport' },
  { id: 276, name: 'TRT sport HD' },
  { id: 277, name: 'Mekke' },
  { id: 278, name: 'Mekke HD' },
  { id: 279, name: 'A sport ' },
  { id: 280, name: 'A sport HD ' },
  { id: 281, name: 'Bein Sport Turkiye' },
  { id: 282, name: 'FB Tv' },
  { id: 283, name: 'Bein Sport 7 HD' },
  { id: 284, name: 'TviBU Sport' },
  { id: 285, name: 'BBC World News' },
  { id: 286, name: 'Bloomberg' },
  { id: 287, name: 'CNN international' },
  { id: 288, name: 'France 24' },
  { id: 289, name: 'NHK World' },
  { id: 290, name: 'NHK World HD' },
  { id: 291, name: 'Bollywood Tv' },
  { id: 292, name: 'Bollywood HD' },
  { id: 293, name: 'MGM' },
  { id: 294, name: 'MGM HD' },
  { id: 295, name: 'OSN action' },
  { id: 296, name: 'Plan B' },
  { id: 297, name: 'Sony Tv' },
  { id: 298, name: 'Mezzo' },
  { id: 299, name: 'Mezzo Live HD' },
  { id: 300, name: 'MTV Live HD' },
  { id: 301, name: 'MTV Rock' },
  { id: 302, name: 'NR1 HD' },
  { id: 303, name: 'History HD' },
  { id: 304, name: 'Extreme Sports' },
  { id: 305, name: 'OSN sport' },
  { id: 306, name: 'AMC Russia' },
  { id: 307, name: 'SilkWa Tv' },
  { id: 308, name: 'Мосфильм.Золотая коллекция' },
  { id: 309, name: 'Baku TV' },
  { id: 310, name: 'Bloomberg HD' },
  { id: 310, name: 'Beyaz Tv HD' },


  




];


const ChannelList = () => {
  return (

    <div className="container mx-auto mt-8 mb-8 dark:text-black">
      <h1 className="text-2xl font-bold mb-4">TV Kanal Siyahısı</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {channels.map((channel) => (
          <div key={channel.id} className="p-4 rounded-md text-center font-semibold">
            <div className='flex gap-3 items-center'>
                <p className='text-start'>{channel.id}.</p>
            <p className="text-center font-semibold">{channel.name}</p></div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
